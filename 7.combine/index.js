import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import reducer from './reducer';
//使用组件reducer 创建一个仓库
let store = createStore(reducer);
class App extends React.Component{
    render(){
        return (
            <table>
                <tr>
                    <td>体力</td>
                    <td>{this.props.health}</td>
                    <td>
                        <button onClick={()=>store.dispatch({type:'ADD_HEALTH',amount:20})}>增加体力</button></td>
                </tr>
                <tr>
                    <td>魔法</td>
                    <td>{this.props.magic}</td>
                    <td><button onClick={()=>store.dispatch({type:'ADD_MAGIC',amount:30})}>增加魔法</button></td>
                </tr>
            </table>
        )
    }
}
function render(){
    let state = store.getState();
    ReactDOM.render(
        <App
            {...state}
        />,
        document.querySelector('#app')
    );
}
store.subscribe(render);
render();