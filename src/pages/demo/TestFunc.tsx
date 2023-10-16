import React, { useState } from "react";

const TestFunc = () => {
    const [count, setCount] = useState(0);

    const handleTest = () => {
        setTimeout(() => {
            console.log('count-1', count);
            setCount(count - 1);
            console.log('count-2', count);
        }, 0)
    }
    return (
        <div>
            <button onClick={handleTest}>测试fnuc</button>
        </div>
    )
}
export default TestFunc;