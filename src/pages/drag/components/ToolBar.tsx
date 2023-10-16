import React from 'react';
import { Row, Button, Col, Input, InputNumber } from 'antd';
import styles from './style.less';
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';
import { DragState } from '@/models/drag';
import { debounce } from 'lodash';

interface Props extends DragState { }

const ToolBar: React.FC<Props> = (props: Props) => {
    const { canvasStyleData, dispatch } = props;

    const debounceChangeVal = debounce((val, key) => {
        // console.log('va', val);
        dispatch({
            type: 'drag/updateCanvasStyleData',
            payload: {
                ...canvasStyleData,
                [`${key}`]: val,
            }
        })
    }, 500)

    const InputNumberEle = (key: string) => (
        <InputNumber style={{ width: 70 }} min={1} precision={0} value={canvasStyleData[key]} onChange={val => {
            debounceChangeVal(val, key);
        }} />
    )

    return (
        <Row className={styles.toolbar_container}>
            <Button>JSON</Button>
            <Button>撤销</Button>
            <Button>重做</Button>
            <Button>插入图片</Button>
            <Button>预览</Button>
            <Button>保存</Button>
            <Button>清空画布</Button>
            <Button>组合</Button>
            <Button>拆分</Button>
            <Button>锁定</Button>
            <Button>解锁</Button>
            <Button>截图</Button>
            <Col style={{ display: 'flex' }}>
                <Col>
                    <span>画布大小：</span>
                    {
                        InputNumberEle('width')
                    }
                    <span style={{ margin: '0 5px' }}>*</span>
                    {
                        InputNumberEle('height')
                    }
                </Col>
                <Col style={{ marginLeft: 10 }}>
                    <span>画布比例：</span>
                    {
                        InputNumberEle('scale')
                    }
                    <span style={{ marginLeft: 5 }}>100%</span>
                </Col>
            </Col>
        </Row>
    )
}


export default connect(({ drag }: ConnectState) => ({
    ...drag,
}))(ToolBar);