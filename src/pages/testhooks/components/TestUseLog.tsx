import React, { memo, useState } from 'react';

import useLog, { LogContext } from '@/hooks/useLog';

const TestUseLog: React.FC = () => {
    const [value, setValue] = useState({});
    const Home = () => {
        const [listenDOM, reportMessage] = useLog();
        return (
            <div>
                <div ref={listenDOM}>
                    <button> 按钮 one   (内部点击) </button>
                    <button> 按钮 two   (内部点击) </button>
                    <button> 按钮 three (内部点击)  </button>
                </div>
                <button onClick={() => { reportMessage('out', 'pv') }} > 外部点击 </button>
            </div>
        )
    }
    const TestUseLogMemo = memo(Home);

    return (
        <LogContext.Provider value={value}>
            <div>
                <TestUseLogMemo />
                <button onClick={() => setValue({ name: '《React进阶实践指南》', author: '我不是外星人' })} >点击</button>
            </div>
        </LogContext.Provider>
    )
}

export default TestUseLog;
