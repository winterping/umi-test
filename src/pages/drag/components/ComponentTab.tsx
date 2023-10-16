import React, { useEffect } from 'react';
import { Row } from 'antd';
import componentlist from './components';
import styles from './style.less';

const ComponentTab: React.FC = () => {
    useEffect(() => {
        // console.log('componentlist', componentlist);
    }, [])

    return (
        <div className={styles.component_container} onDrag={e=>{
            console.log('aabbcc');
            
        }} onDragStart={e => {
            console.log(e);
            e.dataTransfer.setData('index', e.target.dataset.index)
        }}>
            {
                componentlist.map((item, index) => (
                    <div key={item.component} data-index={index} draggable className={styles.list_item}>
                        <span>
                            <item.icon />
                        </span>
                    </div>
                ))
            }

        </div>
    )
}

export default ComponentTab;