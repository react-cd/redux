//import {combineReducers} from 'redux';
import health from './health';
import magic from './magic';
import { combineReducers } from 'redux';

// function combineReducers(reducers){
//    return (state={},action)=>{
//        // ['health','magic']
//        return Object.keys(reducers).reduce((currentState,key)=>{
//            currentState[key] = reducers[key](
//                state[key],
//                action
//            );
//            return currentState;
//        },{});
//    }
// }
export default combineReducers({
    health,
    magic
})
/*
这是合并到的reducer创建的仓库中的默认状态
{
    health:100,
    magic:100
}*/
