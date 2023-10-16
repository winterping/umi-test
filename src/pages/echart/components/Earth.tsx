import React, { useRef, useEffect } from 'react'
import * as echarts from "echarts";

var ROOT_PATH =
    'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
const option = {
    backgroundColor: '#000',
    globe: {
        baseTexture: ROOT_PATH + '/data-gl/asset/earth.jpg',
        heightTexture: ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
        displacementScale: 0.1,
        shading: 'lambert',
        environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
        light: {
            ambient: {
                intensity: 0.1
            },
            main: {
                intensity: 1.5
            }
        },
        layers: [
            {
                type: 'blend',
                blendTo: 'emission',
                texture: ROOT_PATH + '/data-gl/asset/night.jpg'
            },
            {
                type: 'overlay',
                texture: ROOT_PATH + '/data-gl/asset/clouds.png',
                shading: 'lambert',
                distance: 5
            }
        ]
    },
    series: []
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
