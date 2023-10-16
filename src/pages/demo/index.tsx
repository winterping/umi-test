import React, { useState, useEffect, useRef } from "react";
import { Card, Row, Table } from 'antd';
import { geography_data } from './data';
import { SketchPicker, AlphaPicker, BlockPicker, ChromePicker, CirclePicker } from 'react-color';
import Cascader from '@/components/Cascader/index';
import TimePeriodSelector from '@/components/TimePeriodSelector/TimePeriodSelector';
import Button from '@/components/Button/index';
import ContentEditable from 'react-contenteditable';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const Demo = () => {
    const [color, setColor] = useState('#aabbcc');
    const [geographyList, setGeographyList] = useState({
        level_num: 3,
        level_title: ['省份', '城市', '区/县'],
        original_data: geography_data,
        name_key: 'alias',
        id_key: 'code',
    })
    const [dataSource, setDataSource] = useState([]);

    const text = useRef('');
    const [info, setInfo] = useState('');

    const cascaderRef = useRef();

    const handleChange = data => {
        setColor(data.hex);
    }

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    useEffect(() => {
        let arr = [];
        for (let i = 0; i < 50; i++) {
            arr.push({
                key: i + 1,
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            })
        }
        setDataSource(arr);
    }, [])

    return (
        <Card style={{ minHeight: '80vh' }}>
            {/* 颜色选择器 */}
            <Card>
                {/* <SketchPicker /> */}
                {/* <AlphaPicker />
            <BlockPicker/> */}
                <ChromePicker onChange={handleChange} color={color} />
                {/* <CirclePicker/> */}
            </Card>
            {/* 级联选择器 */}
            <Card>
                <Cascader
                    cRef={cascaderRef}
                    levelList={geographyList}
                    callback={() => {

                    }}
                    no_check={[]}
                />
            </Card>
            {/* 周期时间选择器 */}
            <Card>
                <Row>
                    <TimePeriodSelector
                        defaultSelected={[]}
                        onSelectionFinish={items => {

                        }} />
                </Row>

            </Card>
            <Card>
                <Button onClick={e => {
                    console.log('e', e);

                }}>测试</Button>
            </Card>

            {/* <Card>
                <ContentEditable style={{ width:500, height: 100, border: '1px solid red', outline: 'none' }} html={info} onBlur={() => {
                    // console.log(text.current);
                }} onChange={evt => {
                    // text.current = evt.target.value;
                    // let val = info;
                    // val = `<span>${evt.target.value}</span>`;
                    setInfo(evt.target.value);
                    // setInfo(val);
                }} />
                <Button onClick={() => {
                    let val = info;
                    console.log(info);
                
                    val += `<span contentEditable='false' style=’background:#eee‘>
                    <span>测试</span>
                  </span><span></span>`;
                    // console.log(val);

                    // text.current = val;
                    setInfo(val);
                }}>
                    添加

                </Button>
            </Card> */}

            {/* <Table style={{ marginTop: 10 }} sticky={{ offsetHeader: 0 }} dataSource={dataSource} columns={columns} pagination={false} />; */}
        </Card>
    );
};

export default Demo;