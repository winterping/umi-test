import React, { useCallback } from 'react';
import { listData } from '@/util/mock';
import { threeNumberRandom } from '@/util/tool';
import { AnyObj } from '@/util/type';
import { Table, Input, Select, Button } from 'antd';

import useQueryTable from '@/hooks/useQueryTable';

const { Option } = Select;


/* 模拟数据请求 */
function getTableData(payload: AnyObj) {
    return new Promise((resolve) => {
        Promise.resolve().then(() => {
            const { list } = listData
            const arr = threeNumberRandom()  // 生成三个随机数 模拟数据交互
            resolve({
                ...listData,
                list: [list[arr[0]], list[arr[1]], list[arr[2]]],
                total: list.length,
                current: payload.page || 1
            })
        })
    })
}
const columns = [
    {
        title: '商品名称',
        dataIndex: 'id',
        key: 'giftName'
    },
    {
        title: '价格',
        dataIndex: 'price',
        key: 'price'
    },
    // {
    //     title: '图片',
    //     dataIndex: 'giftImage',
    //     key: 'giftImage',
    //     render: (text) => <div>
    //         <img src={text}
    //             style={{ width: '70px', height: '70px' }}
    //         />
    //     </div>
    // }
]

const TestQueryTable: React.FC = () => {
    const [table, form] = useQueryTable({ pageSize: 3 }, getTableData);
    const { formData = {}, setFormItem, reset } = form;
    const { tableData, handerChange, getList, pagination } = table;
    // const { list = [], total = 0, current = 1 } = tableData;

    const submit = () => {
        getList();
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <Input placeholder="名称" value={formData.name || ''} onChange={(e) => {
                    setFormItem(name, e.target.value)
                }}></Input>
                <Select onChange={(value) => setFormItem('type', value)}
                    placeholder="请选择"
                    style={{ width: 200 }}
                    value={formData.type}
                >
                    <Option value="1" >家电</Option>
                    <Option value="2" >生活用品</Option>
                </Select>
                <div style={{ marginLeft: 20 }}>
                    <Button onClick={submit} type="primary">提交</Button>
                    <Button onClick={reset}>重置</Button>
                </div>
            </div>
            <div style={{ marginTop: 20 }}>
                {
                    useCallback(
                        <Table
                            bordered
                            columns={columns}
                            dataSource={tableData.list}
                            onChange={(res) => {
                                handerChange(res.current, res.pageSize);
                            }}
                            pagination={{ ...pagination, total: tableData.total, current: tableData.current }}
                            rowKey='id' />, [tableData])
                }
            </div>
        </div>
    )
}


export default TestQueryTable;