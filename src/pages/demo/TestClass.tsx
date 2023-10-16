import React from "react";

class TestClass extends React.Component {
    state = {
        count: 0
    }
    reduce = () => {
        setTimeout(() => {
            console.log('reduce setState前的count', this.state.count)
            this.setState({
                count: this.state.count - 1
            });
            console.log('reduce setState后的count', this.state.count)
        }, 0);
    }

    render() {
        return (
            <div>
                <button onClick={this.reduce}>测试</button>
            </div>
        )
    }
}
export default TestClass;