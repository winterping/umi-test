import React, { useRef, useEffect } from 'react'
import * as echarts from "echarts";
import '@/map/js/china';
// import { geoCoordMap, provienceData } from "@/util/geo";
import china from '@/map/json/china.json'


function randomData() {
    return Math.round(Math.random() * 100);
}
const dataInfo = [
    {
        name: '北京',
        value: randomData(),
    },
    {
        name: '天津',
        value: randomData(),
    },
    {
        name: '上海',
        value: randomData(),
    },
    {
        name: '重庆',
        value: randomData(),
    },
    {
        name: '河北',
        value: randomData(),
    },
    {
        name: '河南',
        value: randomData(),
    },
    {
        name: '云南',
        value: randomData(),
    },
    {
        name: '辽宁',
        value: randomData(),
    },
    {
        name: '黑龙江',
        value: randomData(),
    },
    {
        name: '湖南',
        value: randomData(),
    },
    {
        name: '安徽',
        value: randomData(),
    },
    {
        name: '山东',
        value: randomData(),
    },
    {
        name: '新疆',
        value: randomData(),
    },
    {
        name: '江苏',
        value: randomData(),
    },
    {
        name: '浙江',
        value: randomData(),
    },
    {
        name: '江西',
        value: randomData(),
    },
    {
        name: '湖北',
        value: randomData(),
    },
    {
        name: '广西',
        value: randomData(),
    },
    {
        name: '甘肃',
        value: randomData(),
    },
    {
        name: '山西',
        value: randomData(),
    },
    {
        name: '内蒙古',
        value: randomData(),
    },
    {
        name: '陕西',
        value: randomData(),
    },
    {
        name: '吉林',
        value: randomData(),
    },
    {
        name: '福建',
        value: randomData(),
    },
    {
        name: '贵州',
        value: randomData(),
    },
    {
        name: '广东',
        value: randomData(),
    },
    {
        name: '青海',
        value: randomData(),
    },
    {
        name: '西藏',
        value: randomData(),
    },
    {
        name: '四川',
        value: randomData(),
    },
    {
        name: '宁夏',
        value: randomData(),
    },
    {
        name: '海南',
        value: randomData(),
    },
    {
        name: '台湾',
        value: randomData(),
    },
    {
        name: '香港',
        value: randomData(),
    },
    {
        name: '澳门',
        value: randomData(),
    },
];

var data = [
    {
        name: '齐齐哈尔',
    },
    {
        name: '盐城',
    },
    {
        name: '青岛',
    },
    {
        name: '金昌',
    },
    {
        name: '泉州',
    },
    {
        name: '拉萨',
    },
    {
        name: '上海浦东',
    },
    {
        name: '攀枝花',
    },
    {
        name: '威海',
    },
    {
        name: '承德',
    },
    {
        name: '汕尾',
    },
    {
        name: '克拉玛依',
    },
    {
        name: '重庆市',
    },
    {
        name: '北京市',
    },
    {
        name: '广西',
    },
];

var geoCoordMap = {
    齐齐哈尔: [123.97, 47.33],
    盐城: [120.13, 33.38],
    青岛: [120.33, 36.07],
    金昌: [102.188043, 38.520089],
    泉州: [118.58, 24.93],
    拉萨: [91.11, 29.97],
    上海浦东: [121.48, 31.22],
    攀枝花: [101.718637, 26.582347],
    威海: [122.1, 37.5],
    承德: [117.93, 40.97],
    汕尾: [115.375279, 22.786211],
    克拉玛依: [84.77, 45.59],
    重庆市: [108.384366, 30.439702],
    北京市: [116.4551, 40.2539],
    广西: [108.479, 23.1152],
};

var dataFrom = '重庆市';
const PictorialBar: React.FC = (props) => {
    const chartRef = useRef(null)

    useEffect(() => {
        var myChart = echarts.init(chartRef.current!);
        initalECharts();
    }, [])

    const convertData = (data) => {
        var res = [];

        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];

            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }

        return res;
    };
    const initalECharts = () => {
        const option = {
            backgroundColor: '#142552',
            tooltip: {
                trigger: 'item',
            },

            geo: {
                map: 'china',
                zoom: 1,
                label: {
                    normal: {
                        show: false,
                        color: '#fff',
                    },
                    emphasis: {
                        show: false,
                        color: 'red',
                    },
                },
                roam: false,
                itemStyle: {
                    normal: {
                        borderWidth: 1, //区域边框宽度
                        borderColor: '#0DC0FF', //区域边框颜色
                        areaColor: '#092766', //区域颜色
                        label: {
                            show: true, //是否显示各省名称
                            textStyle: {
                                color: '#fff', //显示各省名称颜色
                                fontWeight: 'bold',
                            },
                        },
                    },
                    emphasis: {
                        areaColor: '#092766', //区域颜色，鼠标悬停颜色
                        label: {
                            show: true, //鼠标悬浮时是否显示各省名称
                            textStyle: {
                                color: '#fdf1f6', //鼠标悬浮时显示各省名称的颜色
                            },
                        },
                    },
                },
            },
            series: [
                {
                    name: '重庆市',
                    type: 'lines',
                    zlevel: 2,
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 3, //箭头指向速度，值越小速度越快
                        trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 5, //图标大小
                    },
                    lineStyle: {
                        normal: {
                            color: '#C60FFF',
                            width: 1,
                            opacity: 0.1,
                            curveness: 0.2,
                        },
                    },
                    data: data.map(function (dataItem) {
                        return {
                            fromName: dataFrom,
                            toName: dataItem.name,
                            coords: [geoCoordMap[dataFrom], geoCoordMap[dataItem.name]],
                        };
                    }),
                },
                {
                    name: '供需占比',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: 8,
                    showEffectOn: 'render',
                    rippleEffect: {
                        scale: 0,
                        brushType: 'stroke',
                    },

                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true,
                        },
                        emphasis: {
                            show: true,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#c60fff',
                            shadowBlur: 20,
                            shadowColor: '#333',
                        },
                    },
                },
                {
                    type: 'map',
                    mapType: 'china',
                    geoIndex: 1,
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: false,
                        },
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            borderWidth: 1, //区域边框宽度
                            borderColor: '#0DC0FF', //区域边框颜色
                            areaColor: '#092766', //区域颜色
                            label: {
                                show: false, //是否显示各省名称
                                textStyle: {
                                    color: 'yellow', //显示各省名称颜色
                                    fontWeight: 'bold',
                                },
                            },
                        },
                        emphasis: {
                            areaColor: '#092766', //区域颜色，鼠标悬停颜色
                            label: {
                                show: false, //鼠标悬浮时是否显示各省名称
                                textStyle: {
                                    color: '#fdf1f6', //鼠标悬浮时显示各省名称的颜色
                                },
                            },
                        },
                    },
                    data: dataInfo,
                },
            ],
        };
        echarts.registerMap('zhongguo', china);
        var myChart = echarts.init(chartRef.current!);
        myChart.setOption(option);
    }


    return (
        <div ref={chartRef} style={{ height: 500, width: "90%" }}></div>
    )
}
export default PictorialBar;
