// /**
//  *
//  * @param state 就是一个状态 可以是数字，可以是数组，可以是对象 什么都可以
//  * @param action 是一个动作对象，有一个必须的属性叫type,就是操作的类型，其它字段随意
//  */
// const counter = (state = 0, action) => {
//   // type就是你想如何操作这个状态,或者 说如果改变这个状态
//   //reducer就一个普通的处理函数，一定要返回一个全新的值
//   if (!action) {
//       return 0;
//   }
//   switch (action.type) {
//       case '增加':
//           return state + 1;
//       case '减少':
//           return state - 1;
//       default:
//           return state;
//   }
// }
// // import {createStore} from 'redux';
// const { applyMiddleware, compose, createStore } = require('redux')
// const thunk = require('redux-thunk')
// const promiseMiddleware = require('redux-promise');
// // const reduxLogger = require('redux-logger')
// // let store = createStore(counter);
// const initialState = {
//   name: '1'
// }
// const enhancers = [];
// const middleware = [
//   thunk,
//   promiseMiddleware,
//   // reduxLogger
// ];
// const store = createStore(
//   counter,
//   initialState,
//   compose(
//       applyMiddleware(...middleware),
//       ...enhancers
//   )
// );
// const render = () => {
//   // console.log('>>>>>');
//   console.log(store.getState());
//   // document.body.innerText = store.getState();
// }
// //订阅状态变化 ，当状态的时候自动调用render方法
// let l = store.subscribe(render);
// //10秒后之后调用此移除函数
// // setTimeout(function () {
// //   l();
// // }, 10000);
// // render();
// //为当前的文档注册一个点击的监听，当点击此文档的时候派发一个action到仓库里
// // document.addEventListener('click', function () {
// //     store.dispatch({ type: '增加' });
// // })


// console.log(store.getState());
// store.dispatch({ type: '增加' });
// // store.dispatch({ type: '增加' });
// // store.dispatch({ type: '增加' });
// console.log(store.getState());

// // console.log(store.getState());
// // store.dispatch({ type: '减少' });
// // console.log(store.getState());


var name = 10;
const fn =function () {
  console.log(name);
}
name = 11;
fn()