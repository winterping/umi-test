import React from 'react';
import { Row } from 'antd';
import styles from './style.less';
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';
import { DragState } from '@/models/drag';
import { changeStyleWithScale } from '@/util/tool';

interface Props extends DragState { }

const Editor: React.FC<Props> = (props: Props) => {
    const { canvasStyleData, } = props;
    const { width, height, scale, background, color, opacity, fontSize } = canvasStyleData;

    const handleDrop = e => {
        console.log('eee',e);
        
        // e.preventDefault();
        // e.stopPropagation();
        // const index = e.dataTransfer.getData('index')
        // console.log('indddd', index);
    }

    // handleDrop(e) {
    //     e.preventDefault()
    //     e.stopPropagation()

    //     const index = e.dataTransfer.getData('index')
    //     const rectInfo = this.editor.getBoundingClientRect()
    //     if (index) {
    //         const component = deepCopy(componentList[index])
    //         component.style.top = e.clientY - rectInfo.y
    //         component.style.left = e.clientX - rectInfo.x
    //         component.id = generateID()

    //         // 根据画面比例修改组件样式比例 https://github.com/woai3c/visual-drag-demo/issues/91
    //         changeComponentSizeWithScale(component)

    //         this.$store.commit('addComponent', { component })
    //         this.$store.commit('recordSnapshot')
    //     }
    // },


    return (
        <div className={styles.editor_container}>
            <div style={{ width: '100%', overflow: 'auto' }} onDrag={handleDrop}>
                <div className={styles.main} style={{
                    margin: '0 auto',
                    fontSize,
                    color,
                    backgroundColor: background,
                    opacity,
                    width: changeStyleWithScale(width, scale),
                    height: changeStyleWithScale(height, scale),
                }}>

                </div>
            </div>
        </div>
    )
}

export default connect(({ drag }: ConnectState) => ({
    ...drag,
}))(Editor);