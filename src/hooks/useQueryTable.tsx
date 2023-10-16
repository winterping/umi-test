import { useRef, useState, useCallback, useEffect } from 'react';
import { AnyObj } from '@/util/type'

export default function useQueryTable(defaultQuery: AnyObj = {}, api: Function) {
    const formData = useRef<AnyObj>({});
    const pagination = useRef({
        page: defaultQuery.page || 1,
        pageSize: defaultQuery.pageSize || 10,
    })
    //强制更新
    const [, forceData] = useState<any>(null);

    const [tableData, setTableData] = useState({
        list: [],
        total: 0,
        current: 1,
    })

    const getList = useCallback(async (payload = {}) => {
        if (!api) return;
        const data = await api({ ...defaultQuery, ...payload, ...pagination.current, ...formData.current }) || {};
        // console.log('data', data.current);
        if (data.code === 200) {
            setTableData({ list: data.list, current: data.current, total: data.total })
        } else { }
    }, [api])

    const setFormItem = useCallback((key, value) => {
        const form = formData.current;
        form[key] = value;
        forceData({});
    }, [])

    const reset = useCallback(() => {
        const form = formData.current;
        for (let key in form) {
            form[key] = '';
        }
        pagination.current.page = defaultQuery.page || 1;
        pagination.current.pageSize = defaultQuery.pageSize || 10;
        getList();
    }, [getList])

    const handerChange = useCallback((page, pageSize) => {
        pagination.current = {
            page,
            pageSize
        }
        getList();
    }, [getList])

    useEffect(() => {
        getList();
    }, [])

    return [
        {
            tableData,
            handerChange,
            getList,
            pagination: pagination.current,
        },
        {
            formData: formData.current,
            setFormItem,
            reset,
        }
    ]
}