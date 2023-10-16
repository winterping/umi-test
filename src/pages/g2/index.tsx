import React, { useState } from 'react';
import { Card, Button, Row, Col, Cascader } from 'antd';

import Chart from './components/Chart';
import CanvasChart from './components/CanvasChart';
import Bar from './components/Bar';
import CompareBar from './components/CompareBar';

const options = [
    {
        value: 'zhejiajng',
        event_value: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                event_value: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        event_value: 'West Lake',
                    },
                    {
                        value: 'xiasha',
                        event_value: 'Xia Sha',
                        disabled: true,
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        event_value: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                event_value: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        event_value: 'Zhong Hua men',
                    },
                ],
            },
        ],
    },
];
const list = [
    {
        "event_key": "1",
        "event_value": "注册",
        "second_list": [
            {
                "event_key": "6",
                "event_value": "注册",
                "event_raw_json": {
                    "children": [
                        {
                            "filter": {
                                "children": [
                                    {
                                        "query": {
                                            "ck_val_type": "STRING",
                                            "is_public_attr": "1",
                                            "field": "client_version",
                                            "event_value": "客户端版本",
                                            "is_val_enum": "0",
                                            "alias": "client_version",
                                            "attr_type": 1,
                                            "val_type": "STRING",
                                            "event_key": "8",
                                            "join_field": "event_event_key",
                                            "table": "events",
                                            "operator": "no_null"
                                        },
                                        "type": "query-builder-rule"
                                    }
                                ],
                                "logical": "and"
                            },
                            "measure_type": "1",
                            "event_event_key": "1",
                            "event_code": "app_start",
                            "measure_func": "behave",
                            "event_event_value": "app启动",
                            "measure_event_value": "行为^&#有使用过",
                            "measure_event_key": "-&undefined"
                        },
                        {
                            "measure_type": "2",
                            "event_event_key": "1",
                            "event_code": "app_start",
                            "measure_func": "count(1)",
                            "event_event_value": "app启动",
                            "measure_field": "user_event_key",
                            "measure_event_value": "指标^&#次数",
                            "measure_event_key": "-1&-1",
                            "value": "2",
                            "operator": ">="
                        }
                    ],
                    "logical": "and"
                }
            }
        ]
    },
    {
        "event_key": "175",
        "event_value": "立即购买",
        "second_list": [
            {
                "event_key": "1",
                "event_value": "注册",
                "event_raw_json": {
                    "children": [
                        {
                            "filter": {
                                "children": [
                                    {
                                        "query": {
                                            "in_type": "array",
                                            "ck_val_type": "INT",
                                            "is_public_attr": "1",
                                            "attr_type": 1,
                                            "join_field": "event_event_key",
                                            "operator": "in",
                                            "field": "client_event_key",
                                            "event_value": "客户端名称",
                                            "is_val_enum": "1",
                                            "alias": "client_event_key",
                                            "val_type": "INT",
                                            "event_key": "6",
                                            "value": [
                                                "1"
                                            ],
                                            "table": "events"
                                        },
                                        "type": "query-builder-rule"
                                    }
                                ],
                                "logical": "and"
                            },
                            "measure_type": 1,
                            "event_event_key": "1",
                            "event_code": "app_start",
                            "measure_func": "behave",
                            "event_event_value": "app启动",
                            "measure_event_value": "有使用过",
                            "measure_event_key": "-&undefined"
                        },
                        {
                            "measure_type": "2",
                            "event_event_key": "1",
                            "event_code": "vevent_keyeo_play",
                            "measure_func": "count(1)",
                            "event_event_value": "视频完播",
                            "measure_field": "user_event_key",
                            "measure_event_value": "指标^&#次数",
                            "measure_event_key": "-1&-1",
                            "value": "3",
                            "operator": ">"
                        }
                    ],
                    "logical": "and"
                }
            }
        ]
    },
    {
        "event_key": "25",
        "event_value": "关键行为",
        "second_list": [
            {
                "event_key": "3",
                "event_value": "da1san",
                "event_raw_json": {
                    "children": [
                        {
                            "filter": {
                                "children": [
                                    {
                                        "query": {
                                            "in_type": "array",
                                            "ck_val_type": "INT",
                                            "is_public_attr": "1",
                                            "attr_type": 1,
                                            "join_field": "event_event_key",
                                            "operator": "in",
                                            "field": "client_event_key",
                                            "event_value": "客户端名称",
                                            "is_val_enum": "1",
                                            "alias": "client_event_key",
                                            "val_type": "INT",
                                            "event_key": "6",
                                            "value": [
                                                "1"
                                            ],
                                            "table": "events"
                                        },
                                        "type": "query-builder-rule"
                                    }
                                ],
                                "logical": "and"
                            },
                            "measure_type": 1,
                            "event_code": "app_start",
                            "event_event_value": "app启动",
                            "measure_event_value": "有使用过"
                        },
                        {
                            "measure_type": 2,
                            "event_code": "vevent_keyeo_play",
                            "measure_func": "sum(play_time)",
                            "event_event_value": "视频完播",
                            "measure_field": "play_time",
                            "measure_event_value": "播放时长（毫秒）^&#播放总时长（毫秒）",
                            "measure_event_key": "1&1",
                            "value": "3",
                            "operator": ">"
                        }
                    ],
                    "logical": "and"
                }
            }
        ]
    },
    {
        "event_key": "2",
        "event_value": "付费",
        "second_list": [
            {
                "event_key": "8",
                "event_value": "盲盒商城成功付费",
                "event_raw_json": {
                    "children": [
                        {
                            "measure_type": "1",
                            "event_event_key": "1",
                            "event_code": "app_start",
                            "measure_func": "behave",
                            "event_event_value": "app启动",
                            "measure_event_value": "行为^&#有使用过",
                            "measure_event_key": "-&undefined"
                        }
                    ],
                    "logical": "and"
                }
            }
        ]
    }
]

export default function G2() {
    const [refresh, setRefresh] = useState(true);

    const onChange = () => {

    }
    function filter(inputValue, path) {
        return path.some(option => option.event_value.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }

    return (
        <Card style={{ minHeight: '80vh' }}>
            {/* <Chart/> */}
            {/* {refresh&&(   <CanvasChart />)} */}
            {/* <Row>
                <Cascader
                    options={list}
                    onChange={onChange}
                    placeholder="Please select"
                    showSearch={{ filter }}
                    fieldNames={{ label: 'event_value', value: 'event_key', children: 'second_list' }}
                />
            </Row> */}
            <Row>
                <Col span={24}>
                      <Bar />
                </Col>
                <Col span={24}>
                      {/* <CompareBar /> */}
                </Col>
            </Row>
        </Card>
    )
}