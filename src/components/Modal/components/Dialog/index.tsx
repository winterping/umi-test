import { time } from 'echarts';
import React, { useState, useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface DialogInterface {
    width: number;
    visible: boolean;
    onClose: Function;
    closeCb: any;
    children: any;
}

const Dialog: React.FC<DialogInterface> = (props: DialogInterface) => {
    const { width, visible, onClose, closeCb, children } = props;
    const [modelShow, setModelShow] = useState(visible);
    const [modelShowAync, setModelShowAync] = useState(visible);

    /* 控制弹窗隐藏以及动画效果 */
    const controlShow = (f1, f2, value, timer) => {
        f1(value)
        return setTimeout(() => {
            f2(value)
        }, timer)
    }

    const renderChildren = useMemo(() => {
        return ReactDOM.createPortal(<div style={{ display: modelShow ? 'block' : 'none' }} >
            <div className="model_container" style={{ opacity: modelShowAync ? 1 : 0 }}  >
                <div className="model_wrap" >
                    <div style={{ width: width + 'px' }}  > {children} </div>
                </div>
            </div>
            <div className="model_container mast" onClick={() => onClose && onClose()} style={{ opacity: modelShowAync ? 0.6 : 0 }} />
        </div>,
            document.body)
    }, [modelShowAync, modelShow])

    useEffect(() => {
        let timer: any;
        if (visible) {
            timer = controlShow(setModelShow, setModelShowAync, visible, 30)
        } else {
            timer = controlShow(setModelShowAync, setModelShow, visible, 1000)
        }
        return function () {
            timer && clearTimeout(timer);
        }
    }, [visible])

    useEffect(() => {
        !modelShow && typeof closeCb === 'function' && closeCb();
    }, [modelShow])

    return renderChildren;
}

export default Dialog;