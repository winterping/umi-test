// import React, { Component, useRef } from 'react';

// const rootRef = React.createRef();

// class FullScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isFullScreen: false
//     }
//   }
//   componentDidMount() {
//     // 监听页面全屏事件
//     window.onresize = () => {
//       // 全屏
//       if (document.fullscreenElement) {
//         this.setState({ isFullScreen: true });
//       }
//       // 不是全屏
//       else {
//         this.setState({ isFullScreen: false });
//       }
//     }
//   }

//   // 全屏
//   fullScreen = () => {
//     if (!this.state.isFullScreen) {
//       rootRef.current.requestFullscreen();
//     }
//   }

//   // 退出全屏
//   exitFullScreen = () => {
//     document.exitFullscreen();
//   }

//   render() {
//     const { isFullScreen } = this.state;
//     return (
//       <div>
//         {/* 哪一个组件想要实现 全屏 ， 将  ref={rootRef} 写在那个组件上即可 */}
//         <div ref={rootRef} style={{ width: 200, height: 200, background: '#6ebda4' }}>
//           {/* 全屏的时候显示 退出全屏按钮，非全屏的时候显示 全屏按钮 */}
//           {
//             isFullScreen
//               ?
//               <button onClick={this.exitFullScreen}>退出全屏</button>
//               :
//               <button onClick={this.fullScreen}>全屏</button>
//           }
//         </div>

//       </div>
//     )
//   }
// }

// export default FullScreen;

import React, { useRef, useEffect } from 'react';
import { Button } from 'antd';


const FullScreen: React.FC = () => {
  const cRef = useRef<any>();
  useEffect(() => {
    window.onresize = () => {
      // 全屏
      if (document.fullscreenElement) {
        console.log('aaaaaaa');

      }
      // 不是全屏
      else {
        console.log('sssssssss');

      }
    }
  }, [])


  return (
    <div ref={cRef} style={{ width: '100%', height: '100%', background: '#6ebda4' }}>
      <Button onClick={() => {
        document.exitFullscreen();
      }}>退出全屏</Button>
      <Button onClick={() => {
        cRef.current.requestFullscreen();
      }}>全屏</Button>
    </div>
  )
}


export default FullScreen;