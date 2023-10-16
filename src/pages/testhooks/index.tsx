import React, { createContext, useMemo, memo, useState, useEffect } from 'react';
import { Card, Col, Row, TreeSelect } from 'antd';


import TestUseLog from './components/TestUseLog';
import TestUseQueryTable from './components/TestUseQueryTable';
import Modal from '@/components/Modal';
import TestTable from './components/TestTable';

const TestHooks: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [nameShow, setNameShow] = useState(false);
    const [treeData, setTreeData] = useState([]);

    const [handleClose, handleOk, handleCancel] = useMemo(() => {
        const Ok = () => console.log('点击确定按钮')
        const Close = () => setVisible(false)
        const Cancel = () => console.log('点击取消按钮')
        return [Close, Ok, Cancel]
    }, [])

    const handleClick = () => {
        Modal.show({
            content: <p>确定购买《React进阶指南小册》吗</p>,
            title: '《React进阶实践指南》',
            onOk: () => console.log('点击确定'),
            onCancel: () => console.log('点击取消'),
            onClose: () => Modal.hidden()
        })
    }

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 5000; i++) {
            arr.push({
                title: `Child Node_${i}`,
                value: `0-0-0-${i}`,
                key: `0-0-0-${i}`,
            })
        }
        const test_Data = [
            {
                title: 'Node1',
                value: '0-0',
                key: '0-0',
                children: [
                    {
                        title: 'Child Node1',
                        value: '0-0-1',
                        key: '0-0-1',
                        children: arr,
                    },
                ],
            },
            // {
            //     title: 'Node2',
            //     value: '0-1',
            //     key: '0-1',
            //     children: [
            //         {
            //             title: 'Child Node2',
            //             value: '0-1-1',
            //             key: '0-1-1',
            //             children: arr,
            //         },
            //     ],
            // },
        ];
        setTreeData(test_Data)
    }, [])

    return (
        <Card style={{ minHeight: '80vh' }}>
            <Row>
                <TestUseLog />
            </Row>
            <Row style={{ marginTop: 20 }}>
                <TestUseQueryTable />
            </Row>
            <Row style={{ marginTop: 20 }}>

                <Modal
                    onCancel={handleCancel}
                    onClose={handleClose}
                    onOk={handleOk}
                    title={'《React进阶实践指南》'}
                    visible={visible}
                    width={700}
                >
                    <div className="feel" >
                        小册阅读感受： <input placeholder="写下你的感受" />
                        {nameShow && <p>作者： 我不是外星人</p>}
                    </div>
                </Modal>
                <button onClick={() => {
                    setVisible(!visible)
                    setNameShow(false)
                }}
                > model show </button>
                <button onClick={handleClick} > model show ( 显示作者 ) </button>
            </Row>

            <Row style={{ marginTop: 20 }}>
                树组件：<TreeSelect
                    style={{ width: 200 }}
                    treeCheckable
                    // showSearch
                    // treeNodeFilterProp="title"
                    treeData={treeData}
                    dropdownStyle={{ maxHeight: 200, overflowY: 'auto' }}
                    maxTagCount={3}
                    showCheckedStrategy={TreeSelect.SHOW_PARENT}
                    onChange={(value, label, extra) => {
                        console.log('value', value);
                        // updateFields({
                        //     material_tags: label,
                        // })
                    }}
                />
            </Row>

            <Row style={{ marginTop: 20 }}>
                <Row style={{ width: 600 }}>
                    <TestTable />
                </Row>
            </Row>

        </Card>

    )
}

export default TestHooks;
