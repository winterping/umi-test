import React, { useRef, useEffect } from 'react';
import { Row } from 'antd';

const CanvasChart: React.FC = () => {
    const canvasRef = useRef<any>();

    const getData = () => {
        var myCanvas = canvasRef.current;
        //获取上下文
        var ctx = myCanvas.getContext('2d');
        // console.log('ctx', ctx);
        // return;
        var grid = 10;
        var canvasHeight = ctx.canvas.height;//计算canvas画布的高度
        var canvasWidth = ctx.canvas.width;//获取画布的宽度
        var xLineNumber = Math.floor(canvasWidth / grid);//计算需要几条横线
        var yLineNumber = Math.floor(canvasHeight / grid);//计算需要几条竖线
        ctx.strokeStyle = "#eee";
        // for (var i = 0; i < xLineNumber; i++) {//循环来画线
        //     ctx.beginPath();
        //     ctx.moveTo(i * grid, 0);
        //     ctx.lineTo(i * grid, canvasHeight);
        //     ctx.stroke();
        // }
        // for (var i = 0; i < yLineNumber; i++) {
        //     ctx.beginPath();
        //     ctx.moveTo(0, i * grid);
        //     ctx.lineTo(canvasWidth, i * grid);
        //     ctx.stroke();
        // }
        //绘制坐标轴

        var spance = 30;
        var arrowSize = 10;
        ctx.fillStyle = '#2e88fc';

        //1.绘制Y轴
        ctx.beginPath();
        ctx.moveTo(spance, spance);
        ctx.lineTo(spance, canvasHeight - spance);
        ctx.strokeStyle = "#2e88fc";
        ctx.stroke();

        // //2.绘制X轴
        ctx.beginPath();
        ctx.moveTo(spance, canvasHeight - spance);
        ctx.lineTo(canvasWidth - spance, canvasHeight - spance);
        ctx.strokeStyle = "#2e88fc";
        ctx.stroke();

        //3.绘制X轴的箭头
        ctx.beginPath();
        ctx.moveTo(canvasWidth - spance, canvasHeight - spance - 5);
        ctx.lineTo(canvasWidth - spance, canvasHeight - spance + 5);
        ctx.lineTo(canvasWidth - spance + 10, canvasHeight - spance);
        ctx.strokeStyle = "#2e88fc";
        ctx.closePath();
        ctx.fill();

        // //绘制Y轴箭头
        ctx.beginPath();
        ctx.moveTo(spance - 5, spance);
        ctx.lineTo(spance + 5, spance);
        ctx.lineTo(spance, spance - 10);
        ctx.strokeStyle = "#2e88fc";
        ctx.closePath();
        ctx.fill();

        // 绘制中轴线
        ctx.beginPath();
        ctx.strokeStyle = "#aabbcc";
        ctx.setLineDash([3, 3]);
        ctx.moveTo(spance, (canvasHeight - spance - spance) / 2);
        ctx.lineTo(canvasWidth - spance, (canvasHeight - spance - spance) / 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "#aabbcc";
        ctx.setLineDash([3, 3]);
        ctx.moveTo((canvasWidth - spance) / 2, spance);
        ctx.lineTo((canvasWidth - spance) / 2, canvasHeight - spance);
        ctx.stroke();


        ctx.fillText('搜索', 10, 10);



    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Row>
            <canvas width="600" height="400" style={{ background: '#fff' }} ref={canvasRef}></canvas>
        </Row>
    )
}
export default CanvasChart;