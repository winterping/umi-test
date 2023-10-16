import React, { useRef, useEffect } from 'react'
import * as echarts from "echarts";

var data = [
    { name: '合格率', value: 0.50 },
    { name: '优秀率', value: 0.54 },
    { name: '优良率', value: 0.54 },
    { name: '满意度', value: 1 },
];
var color = '#929292';
let xAxisData = [];
let seriesData = [];
let topData = [];
let botData = [];
let sum = 0;
let barTopColors = ['#B87757', '#2682B5', '#d6da36', '#5fb381', '#d37070'];
var barBotColors = ['#FF7D34', '#2BB8F7', '#FAFF1D', '#5BF299', '#ec6565'];

data.map((item) => {
    xAxisData.push(item.name);
    seriesData.push(item.value);
    sum += item.value;
});
data.map(it => {
    topData.push(1);
    botData.push(1);
});

const option = {
    backgroundColor: color == '#fff' ? '#000' : '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params, ticket, callback) {
            // console.log(params)
            const item = params[2];
            return item.name + ' : ' + (item.value * 100).toFixed(1) + '%';
        },
        backgroundColor: '#fff',
    },
    grid: {
        top: '10%',
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
    },
    title: {
        text: '质量目标',
        left: 'left',
        top: 20,
        textStyle: {
            color: '#797979',
        }
    },

    xAxis: {
        data: xAxisData,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#929292',
                opacity: color == '#fff' ? 0.3 : 1,
            },
        },
        axisLabel: {
            show: true,
            margin: 10,
            interval: 0,
            textStyle: {
                color: color,
                lineHeight: 18,
            },
        },
        interval: 0,
    },
    yAxis: {
        // name: "面积：㎡",
        nameTextStyle: {
            color: color,
            fontSize: 12,
        },
        splitLine: {
            show: color == '#fff' ? false : true,
            lineStyle: {
                color: color,
                opacity: 0.1,
            },
        },
        axisTick: {
            lineStyle: {
                color: color,
                opacity: color == '#fff' ? 0.3 : 1,
            },
        },
        axisLine: {
            lineStyle: {
                color: color,
                opacity: color == '#fff' ? 0.3 : 1,
            },
        },
        axisLabel: {
            show: false,
            textStyle: {
                fontSize: 12,
                color: color,
            },
        },
        splitNumber: 3,
    },
    series: [
        {
            name: '柱顶部',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, -5],
            z: 16,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return barTopColors[params.dataIndex];
                    },
                },
            },
            label: {
                show: true,
                position: 'top',
                fontSize: 14,
                fontWeight: 'bold',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return barBotColors[params.dataIndex];
                        },
                    },
                },
                formatter: function (params, index) {
                    return ((params.value) * 100).toFixed(1) + '%';
                },
            },
            symbolPosition: 'end',
            data: seriesData,
        },
        {
            name: '柱底部',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, 5],
            z: 11,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return barBotColors[params.dataIndex];
                    },
                },
            },
            data: botData,
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function (params) {
                        return barBotColors[params.dataIndex];
                    },
                    opacity: 0.5,
                },
            },
            z: 11,
            silent: true,
            barWidth: 40,
            barGap: '-100%', // Make series be overlap
            data: seriesData,
        }
    ],
};

const PictorialBar: React.FC = (props) => {
    const chartRef = useRef(null)

    useEffect(() => {
        var myChart = echarts.init(chartRef.current!);
        myChart.setOption(option);
    }, [])


    return (
        <div ref={chartRef} style={{ height: 500, width: "90%" }}></div>
    )
}
export default PictorialBar;
