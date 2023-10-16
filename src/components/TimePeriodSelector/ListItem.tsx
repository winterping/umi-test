import React, { useEffect } from 'react'
import { createSelectable } from 'react-selectable-fast'
import cs from 'classnames';
import styles from './style.less';


const Item: React.FC = (props: any) => {
    const { selectableRef, isSelecting, title, row, isSelected } = props;

    useEffect(() => {

    }, [])

    return (
        <div
            className={cs(styles['time-period-selector-item'], { [`${styles.selected}`]: isSelected, [`${styles.selecting}`]: isSelecting, [`${styles['row-item']}`]: row > -1, 'not-selectable': title })}
            ref={selectableRef}
        >
            {title}
        </div >
    )
}

export default createSelectable(Item);
