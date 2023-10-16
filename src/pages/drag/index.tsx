import React, { useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';
import { DragState } from '@/models/drag';
import styles from './index.less';

import ToolBar from './components/ToolBar';
import Editor from './components/Editor';
import ComponentTab from './components/ComponentTab';
import ConfigTab from './components/ConfigTab';

interface Props extends DragState {

}

const Drag: React.FC<Props> = (props: Props) => {
    const { componentData } = props;
    useEffect(() => {

    }, [])

    const handleDrag=(e)=>{
        e.preventDefault()
        e.stopPropagation()
        console.log('wwwwww');
        
    }

    return (
        <Card className={styles.drag_container}>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }} >
                <ToolBar />
                <div style={{ display: 'flex', flex: 1 }}>
                    {/* 左侧组件列表  */}
                    <ComponentTab />
                        {/* 画布 */}
                        <Editor />
                    {/* 画布属性 */}
                    <ConfigTab />
                </div>
            </div>
        </Card>
    )
}

export default connect(({ drag }: ConnectState) => ({
    ...drag,
}))(Drag);