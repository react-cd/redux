import {createStore} from 'redux';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//编写reducer 就是一个普通函数
const counter = (state = 0, action)=> {
    if (!action) {
        return 0;
    }
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
//创建一个仓库
const store = createStore(counter);
//创建一个react组件
class Counter extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.value}</h1>
                <button onClick={()=>store.dispatch({type:'INCREMENT'})} >+</button>
                <button onClick={()=>store.dispatch({type:'DECREMENT'})} >-</button>
            </div>
        )
    }
}
//渲染方法，把组件渲染到页面中
const render = ()=>{
    ReactDOM.render(
        <Counter value={store.getState()}/>,
        document.querySelector('#app')
    );
}
//订阅状态变化，当状态变化之后重新渲染页面
store.subscribe(render);
render();