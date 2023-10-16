import React, { useRef, useEffect } from 'react'
import * as echarts from "echarts";
import '@/map/js/china';
import { geoCoordMap, provienceData } from "@/util/geo";
import data from '@/util/map.json'
import china from '@/map/json/china.json'

const PictorialBar: React.FC = (props) => {
    const chartRef = useRef(null)

    useEffect(() => {
        var myChart = echarts.init(chartRef.current!);
        // echarts.registerMap('中国', china);//#2
        // let option = {
        //     series: [
        //         {
        //             name: 'china',
        //             type: 'map',
        //             mapType: 'china',//#3
        //             itemStyle: {
        //                 normal: {
        //                     label: { show: true },
        //                     areaStyle: {
        //                         color: '#CCFFFF',
        //                     },
        //                 },
        //                 emphasis: {
        //                     label: { show: true },
        //                     areaStyle: {
        //                         color: '#CCFFFF',
        //                     },
        //                 },
        //             },
        //             data: [{ name: '历下区', value: 100, selected: true }],//地图数据。name对应geo.json中的name,
        //             nameMap: { '历下区': '历下区' }//更改地图中的name 名称
        //         }
        //     ]
        // }
        // myChart.setOption(option);
        initalECharts();
    }, [])

    const initalECharts = () => {
        const data = [
            { name: '上海', area: '华东大区', type: 'areaCenterCity' },
            { name: '深圳', area: '华南大区', type: 'areaCenterCity' },
            { name: '成都', area: '华西大区', type: 'areaCenterCity' },
            { name: '北京', area: '华北大区', type: 'areaCenterCity' },
            { name: '武汉', area: '华中大区', type: 'areaCenterCity' },
            { name: '沈阳', area: '东北大区', type: 'areaCenterCity' },
        ];
        echarts.registerMap('zhongguo', china);
        for (let item of provienceData) {
            if (item.area === '东北大区') {
                item.itemStyle = {
                    normal: {
                        areaColor: "#3CA2FC",
                    },
                    emphasis: {
                        areaColor: "#3CA2FC",
                    }
                }
            } else if (item.area === '华北大区') {
                item.itemStyle = {
                    normal: {
                        areaColor: "#6CAFBE",
                    },
                    emphasis: {
                        areaColor: "#6CAFBE",
                    }
                }
            } else if (item.area === '华中大区') {
                item.itemStyle = {
                    normal: {
                        areaColor: "#ADD03C",
                    },
                    emphasis: {
                        areaColor: "#ADD03C",
                    }
                }
            } else if (item.area === '华东大区') {
                item.itemStyle = {
                    normal: {
                        areaColor: "#A13614",
                    },
                    emphasis: {
                        areaColor: "#A13614",
                    }
                }
            } else if (item.area === '华西大区') {
                item.itemStyle = {
                    normal: {
                        areaColor: "#FFBA00",
                    },
                    emphasis: {
                        areaColor: "#FFBA00",
                    }
                }
            } else if (item.area === '华南大区') {
                item.itemStyle = {
                    normal: {
                        areaColor: "#FFD300",
                    },
                    emphasis: {
                        areaColor: "#FFD300",
                    }
                }
            } else if (item.area === '南海诸岛') {
                item.itemStyle = {
                    normal: {
                        borderColor: '#fff',//区域边框颜色
                        areaColor: "#fff",//区域颜色
                    },
                    emphasis: {
                        show: false,
                        // borderColor: '#fff',
                        // areaColor:"#fff",
                    }
                }
            } else {
                item.itemStyle = {
                    normal: {
                        areaColor: "#D9D9D9",
                    },
                    emphasis: {
                        areaColor: "#D9D9D9",
                    }
                }
            }
        }
        var myChart = echarts.init(chartRef.current!);
        myChart.setOption({
            tooltip: {
                show: false,       //不显示提示标签
                formatter: '{b}',      //提示标签格式
                backgroundColor: "#ff7f50",//提示标签背景颜色
                textStyle: { color: "#fff" } //提示标签字体颜色
            },
            grid: {
                left: '10%',
                right: '10%',
                top: '10%',
                bottom: '10%',
                containLabel: true
            },
            geo: {
                map: 'china',
                roam: false,
                zoom: 1.2,
                tooltip: {
                    show: false,       //不显示提示标签
                },
                label: {
                    normal: {
                        show: false,//显示省份标签
                        textStyle: { color: "#c71585" }//省份标签字体颜色
                    },
                    emphasis: {//对应的鼠标悬浮效果
                        show: false,
                        textStyle: { color: "#800080" }
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: .5,//区域边框宽度
                        borderColor: '#fff',//区域边框颜色
                        areaColor: "#ffefd5",//区域颜色
                        label: { show: false }
                    },
                    emphasis: {
                        show: false,
                        borderWidth: .5,
                        borderColor: '#4b0082',
                        areaColor: "#ffdead",
                    }
                },
            },
            series: [
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: 20,
                    symbolRotate: 35,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    tooltip: {
                        show: false,       //不显示提示标签
                        formatter: '{c}',      //提示标签格式
                        backgroundColor: "#fff",//提示标签背景颜色
                        borderColor: '#ccc',
                        borderWidth: .5,
                        textStyle: { color: "#000" } //提示标签字体颜色
                    },
                    itemStyle: {
                        normal: {
                            color: '#57c610'
                        }
                    }
                },
                {
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    zoom: 1.2,
                    tooltip: {
                        show: false,       //不显示提示标签
                    },
                    label: {
                        normal: {
                            show: false    //显示省份标签
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: .5,      //区域边框宽度
                            borderColor: '#fff',  //区域边框颜色
                            label: { show: false }
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    // geoIndex: 0,
                    // tooltip: {show: false},
                    data: provienceData
                }
            ],
        })
    }
    const convertData = (data) => {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].area),
                    area: data[i].area,
                    type: data[i].type,
                });
            }
        }
        // console.log(res);
        return res;
    }

    return (
        <div ref={chartRef} style={{ height: 500, width: "90%" }}></div>
    )
}
export default PictorialBar;
