import React, { useState, useMemo, useEffect, isValidElement } from 'react';
import './style.less';

import Dialog from './components/Dialog';
import { AnyObj } from '@/util/type';
import ReactDOM from 'react-dom';

type ele = string | JSX.Element;

interface ModalProps {
    children: any;
    onOk?: Function;
    onCancel?: Function;
    cancelText?: ele;
    okTest?: ele;
    footer?: any;
    title: ele;
    onClose: Function;
    content?: any;
    [key: string]: any;
}

const Modal = (props: ModalProps) => {
    const { onOk, onCancel, cancelText, okTest, footer, title, onClose, content, children, visible, width = 500, closeCb } = props;

    // 底部元素
    const renderFooter = () => {
        if (footer && isValidElement(footer)) {
            return footer
        }
        return (
            <div className="model_bottom" >
                <div className="model_btn_box" >
                    <button className="searchbtn" onClick={(e) => { onOk && onOk(e) }} >{okTest || '确定'}</button>
                    <button className="concellbtn" onClick={(e) => { onCancel && onCancel(e) }} >{cancelText || '取消'}</button>
                </div>
            </div>
        )
    }

    // 顶部元素
    const renderTop = () => (
        <div className="model_top" >
            <p>{title}</p>
            <span className="model_top_close" onClick={() => onClose && onClose()} >x</span>
        </div>
    )

    // 弹窗内容
    const renderContent = () => {
        return isValidElement(content) ? content : props.children ? children : null
    }

    return (
        <Dialog
            closeCb={closeCb}
            onClose={onClose}
            visible={visible}
            width={width}
        >
            {renderTop()}
            {renderContent()}
            {renderFooter()}
        </Dialog>
    )

}

let ModalContainer: any = null;
const modelSysbol = Symbol('$$__model__Container_hidden');

Modal.show = function (config: AnyObj) {
    const props = { ...config, visible: true };
    if (ModalContainer) return;
    const container = ModalContainer = document.createElement('div');
    const manager: AnyObj = container[modelSysbol] = {
        setShow: null,
        mounted: false,
        hidden() {
            const { setShow } = manager;
            setShow && setShow(false);
        },
        destory() {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
            ModalContainer = null;
        }
    }

    const ModelApp = (props) => {
        const [show, setShow] = useState(false);
        manager.setShow = setShow;
        const { visible, ...trueProps } = props;

        useEffect(() => {
            manager.mounted = true;
            setShow(visible);
        }, [])
        return <Modal  {...trueProps} closeCb={() => manager.mounted && manager.destory()} visible={show} />
    }

    document.body.appendChild(container);
    ReactDOM.render(<ModelApp  {...props} />, container)
    return manager;
}

Modal.hidden = function () {
    if (!ModalContainer) return
    /* 如果存在 ModalContainer 那么隐藏 ModalContainer  */
    ModalContainer[modelSysbol] && ModalContainer[modelSysbol].hidden()
}

// const MemodFuncComponent = React.memo(Modal)

export default Modal;

