import React, { useEffect } from 'react';
import { } from 'antd';
import styles from './style.less';

const Tetris: React.FC = () => {
    const handleResize = () => { }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <div style={{ position: 'relative', height: "100%" }}>
            <div className={styles.tetris_container}>

            </div>
        </div>
    )
}


export default Tetris;