import React, { useState, useEffect, useImperativeHandle, useRef } from 'react';
import { Select } from 'antd';
import { fetchBlindBoxList } from '@/services/operation';
import { debounce } from 'lodash';

const initFields = {
    limit: 200,
    offset: 0,
    search_key: undefined,
}

interface Props {
    value?: string | undefined;
    callbackUpdate: Function;
    width?: number;
    parent_fields: AnyObj;
    visible: boolean;
    cRef?: any;
}

const BlindBoxSelect: React.FC<Props> = (props: Props) => {
    const { value = undefined, callbackUpdate, width = 400, visible, parent_fields, cRef } = props;

    const [fields, setFields] = useState({
        ...initFields,
        ...parent_fields,
    });
    const [blindBoxList, setBlindBoxList] = useState([]);
    const [total, setTotal] = useState(0);
    const dataRef = useRef([]);

    useImperativeHandle(cRef, () => ({
        getItemName: (id: number) => {
            let str = '';
            blindBoxList.map(item => {
                if (item.id === id) {
                    // console.log(item);
                    str = item.name;
                }
            })
            return str;
        },
    }))

    useEffect(() => {
        if (visible) {
            if (value) {
                getBlindBoxList({
                    search_key: value,
                })
            }
        }
    }, [visible])

    const getBlindBoxList = async (obj = {}) => {
        const { offset, limit, ...rest } = fields;
        const params = {
            ...rest,
            limit,
            offset: offset * limit,
            ...obj,
        }
        // console.log(params);
        const res = await fetchBlindBoxList(params);
        // console.log('res', res.data);
        if (res && +res.code === 200) {
            setTotal(res.data.total);
            if (fields.offset === 0 && Object.keys(obj).length === 0) {
                setBlindBoxList(res.data.list);
                dataRef.current = res.data.list;
            } else {
                const arr = dataRef.current.concat(res.data.list);
                setBlindBoxList(arr);
                dataRef.current = arr;
            }
        }
    }

    const getScroll = debounce(() => {
        setFields({
            ...fields,
            offset: fields.offset + 1,
        })
    }, 1000)

    const handleScroll = e => {
        e.persist();
        const { clientHeight, scrollTop, scrollHeight } = e.target;
        if (scrollTop + clientHeight >= (scrollHeight - 10)) {
            // console.log('length', blindBoxList.length, total);
            if (blindBoxList.length < total) {
                getScroll()
            }
        }
    }

    const handleSearch = debounce(val => {
        setFields({
            ...fields,
            search_key: val,
            offset: 0,
        })
    }, 1000)

    const onSearch = (val: string) => {
        handleSearch(val);
    }
    useEffect(() => {
        getBlindBoxList();
    }, [JSON.stringify(fields)])

    useEffect(() => {
        setFields({
            ...fields,
            ...initFields,
            ...parent_fields,
        });
    }, [JSON.stringify(parent_fields)])

    return (
        <Select
            style={{ width }}
            showSearch
            allowClear
            notFoundContent="无相关数据选项"
            dropdownMatchSelectWidth={false}
            placeholder="请选择指定盲盒"
            onPopupScroll={handleScroll}
            onSearch={onSearch}
            filterOption={() => true}
            value={value}
            onChange={(id: any, option) => {
                if (!id) {
                    setFields(initFields);
                }
                callbackUpdate(id, option);
            }}
        >
            {blindBoxList.map((item: AnyObj) => (
                <Select.Option
                    value={item.id}
                    key={item.id}
                    config={item}
                >
                    {item.id}({item.name})
                </Select.Option>
            ))}
        </Select>
    )
}

export default React.memo(BlindBoxSelect);
