
const health = (state = 100, action) => {
    // console.log(arguments)
    switch (action.type) {
        case 'ADD_HEALTH':// 如果增加体力则在原来基础上添加
            return state + action.amount;
        default:
            return state;
    }
}
/**
 *
 * @param state 就是一个状态 可以是数字，可以是数组，可以是对象 什么都可以
 * @param action 是一个动作对象，有一个必须的属性叫type,就是操作的类型，其它字段随意
 */
const counter = (state = 0, action) => {
    // type就是你想如何操作这个状态,或者 说如果改变这个状态
    //reducer就一个普通的处理函数，一定要返回一个全新的值
    if (!action) {
        return 0;
    }
    switch (action.type) {
        case '增加':
            return state + 1;
        case '减少':
            return state - 1;
        default:
            return state;
    }
}
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';

// const thunk = require('redux-thunk')
// const promiseMiddleware = require('redux-promise');
// const reduxLogger = require('redux-logger')
// let store = createStore(counter);
const initialState = {
    name: '1'
}
const enhancers = [];
const middleware = [
    promiseMiddleware,
    reduxLogger,
    thunk
];
const store = createStore(
    combineReducers({ counter, health }),
    initialState,
    compose(
        applyMiddleware(...middleware),
        ...enhancers
    )
);
const render = () => {
    // console.log('>>>>>');
    // console.log(store.getState());
    document.body.innerHTML = store.getState();
}
//订阅状态变化 ，当状态的时候自动调用render方法
let l = store.subscribe(render);
//10秒后之后调用此移除函数
setTimeout(function () {
    l();
}, 10000);
render();
//为当前的文档注册一个点击的监听，当点击此文档的时候派发一个action到仓库里
document.addEventListener('click', function () {
    // store.dispatch({ type: '增加' });
    const pushToHome = () => (dispatch, getState) => {
        console.log(dispatch);
        debugger
        dispatch({ type: '增加' })
        // console.log('pushToHome');
        // console.log(dispatch);
        // console.log(getState);
        // store.dispatch({ type: '增加' })
        //   const state = getState();
        //   let home = state.dashboard.menus[0];
        //   if (home) home = home.path;
        //   if (state.router.locationBeforeTransitions.pathname === '/') {
        //     dispatch(push(home));
        //   }
    };
    // pushToHome()()
    store.dispatch(pushToHome());
    // export const pushToHome = () => (dispatch, getState) => {
    //   const state = getState();
    //   let home = state.dashboard.menus[0];
    //   if (home) home = home.path;
    //   if (state.router.locationBeforeTransitions.pathname === '/') {
    //     dispatch(push(home));
    //   }
    // };
    // this.props.pushToHome();
})


// console.log(store.getState());
// store.dispatch({ type: '增加' });
// store.dispatch({ type: '增加' });
// store.dispatch({ type: '增加' });
// console.log(store.getState());

// console.log(store.getState());
// store.dispatch({ type: '减少' });
// console.log(store.getState());

