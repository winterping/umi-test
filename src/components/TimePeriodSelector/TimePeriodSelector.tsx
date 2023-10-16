import React, { Fragment, useState, useRef, useEffect } from 'react'
import { SelectableGroup } from 'react-selectable-fast'
import List from './List'

import styles from './style.less';

function prefixNum(num) {
    if (num < 10) {
        return `0${num}`;
    }
    return num;
}

const day_List = {
    0: '星期一',
    1: '星期二',
    2: '星期三',
    3: '星期四',
    4: '星期五',
    5: '星期六',
    6: '星期日',
}

interface TimeProps {
    defaultSelected: any[];
    onSelectionFinish: Function;
}

const TimePeriodSelector: React.FC<TimeProps> = (props: TimeProps) => {
    const { defaultSelected = [], onSelectionFinish } = props;
    const [tips, setTips] = useState('');
    const [items, setItems] = useState([]);
    const [groupedData, setGroupedData] = useState({});
    // const listHook = useRef();

    const isOdd = num => num % 2 !== 0

    const getGroupNum = arr => {
        const result: any[] = [];
        let i = 0;
        const list = arr.sort((a, b) => a.index - b.index);

        list.forEach((item, index) => {
            if (index === 0) {
                result[0] = [item];
            } else if (item.index - list[index - 1].index === 1) {
                result[i].push(item);
            } else {
                result[++i] = [item]; // 开辟新空间。
            }
        })
        return result;
    }

    const getFormatTime = source => {
        // console.log('source', source);
        let str = '';
        source.map(item => {
            if (item.length === 1) {
                const data = item[0];
                const num = data.column + 1;
                const time_num = Math.floor(num / 2);
                str += isOdd(num) ? `${prefixNum(time_num)}:00-${prefixNum(time_num)}:30、` : `${prefixNum(time_num - 1)}:30-${prefixNum(time_num)}:00、`;
            } else {
                const start_data = item[0];
                const end_data = item[item.length - 1];
                const start_num = start_data.column;
                const start_time_num = Math.floor(start_num / 2);
                const end_num = end_data.column;
                const end_time_num = Math.ceil(end_num / 2);
                let val = '';
                val += isOdd(start_num) ? `${prefixNum(start_time_num)}:30-` : `${prefixNum(start_time_num)}:00-`;
                val += isOdd(end_num) ? `${prefixNum(end_time_num)}:00` : `${prefixNum(end_time_num)}:30`;
                str += `${val}、`;
            }
        })
        return str.slice(0, str.length - 1);
    }

    const generateTime = source => {
        const data = getGroupNum(source);
        const val = getFormatTime(data);
        return val;
    }

    // 生成展示
    const generateTimePeriodExhibition = () => Object.keys(groupedData).map((key, i) => (
        <p key={i} className={styles['time-period-selecto-ex']}>
            <span className={styles['time-period-selector-time']}>{day_List[key]}</span>
            <span>{generateTime(groupedData[key])}</span>
        </p>
    ))

    const getDateObj = source => {
        const result = {};
        source.map(item => {
            if (!result.hasOwnProperty(item.row)) {
                result[item.row] = [];
            }
            result[item.row].push(item)
        })
        return result;
    }

    const handleSelectionFinish = selectedItems => {
        const arr = selectedItems.map(item =>
            item.props.value,
        )
        arr.sort((a, b) => a.row - b.row);
        const grouped_data = getDateObj(arr);
        // console.log('groupedData', arr);
        let val = '';
        if (arr.length > 0) {
            val = '已选择时间段'
        } else {
            val = '可拖动鼠标选择时间段'
        }
        setTips(val);
        setGroupedData(grouped_data);
        const result = arr.map(i => i.index);
        onSelectionFinish(result);
    }

    const generateItems = () => {
        const arr = [];
        const selectedItems = [];
        for (let i = 0; i < 24; i++) {
            const data = {
                row: -1,
                column: i,
                index: i,
                title: i < 10 ? `0${i}` : `${i}`,
            }
            arr.push(data);
        }
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 48; j++) {
                const num = i * 48;
                const index = num + j;
                const data = {
                    row: i,
                    column: j,
                    index,
                };
                arr.push(data);

                if (defaultSelected.includes(index)) {
                    data.isSelected = true;
                    selectedItems.push({ props: { value: data } });
                }
            }
        }
        setItems(arr);
        // console.log('items', arr);
        handleSelectionFinish(selectedItems);
    }

    useEffect(() => {
        generateItems();
    }, [])

    const handleSelecting = () => { }
    const handleSelectionClear = () => { }

    return (
        <Fragment>
            <div className={styles['time-container']}>
                <div className={styles['time-period-selector-title-wrapper']}>
                    <span className={styles['time-period-selector-title']}>00:00-12:00</span>
                    <span className={styles['time-period-selector-title']}>12:00-24:00</span>
                </div>
                <SelectableGroup
                    enableDeselect
                    // tolerance={true}
                    globalMouse
                    allowClickWithoutSelected
                    duringSelection={handleSelecting}
                    onSelectionClear={handleSelectionClear}
                    onSelectionFinish={handleSelectionFinish}
                    ignoreList={['.not-selectable']}
                >
                    <List items={items} tips={tips} />
                </SelectableGroup>
                {generateTimePeriodExhibition()}
            </div>
        </Fragment>
    )
}

export default TimePeriodSelector;
