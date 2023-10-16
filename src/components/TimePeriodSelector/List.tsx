import React, { Fragment } from 'react'
import { DeselectAll } from 'react-selectable-fast'
import Item from './ListItem';
import styles from './style.less';

interface ListProps {
    tips: string;
    items: any[];
    // ref: any;
}

const List: React.FC<ListProps> = (props: ListProps) => {
    const { tips, items } = props;

    const generateDay = () => {
        const days = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
        return days.map(day => (<div key={day} className={styles['time-period-selector-day']}>{day}</div>))
    }

    return (
        <Fragment>
            <div>
                <div className={styles['time-period-selector-day-wrapper']}>
                    {generateDay()}
                </div>
                <div className={styles['time-period-selector-wrapper']}>
                    {items.map((item, i) => (
                        <Item
                            key={i}
                            title={item.title}
                            value={item}
                            isSelected={item.isSelected}
                            row={item.row}
                        />
                    ))}
                </div>
            </div>
            <div className={styles['time-period-selector-button-wrapper']}>
                <span className={styles['time-period-selector-tips']}>{tips}</span>
                <DeselectAll className={styles['time-period-selector-button']}>
                    <span >清空</span>
                </DeselectAll>
            </div>
        </Fragment>
    )
}
export default List;
