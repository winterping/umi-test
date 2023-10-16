import React, { useEffect } from 'react';
import { } from 'antd';
import { ConfigContext, defaultGetPrefixCls } from './provider';
import Space from './index';

const Test: React.FC = () => {
    return (
        <ConfigContext.Provider value={
            {
                getPrefixCls: defaultGetPrefixCls,
                space: {
                    size: 'large',
                }
            }
        }>
            <Space
                direction="horizontal"
                align="end"
                style={{ height: '200px' }}
                size={60}
                // split={<div className="box" style={{ background: 'red' }}></div>}
                wrap={true}
            >
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </Space>
        </ConfigContext.Provider>
    )
}


export default Test;