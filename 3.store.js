/**
 *
 * @param state 就是一个状态 可以是数字，可以是数组，可以是对象 什么都可以
 * @param action 是一个动作对象，有一个必须的属性叫type,就是操作的类型，其它字段随意
 */
const counter = (state = 0, action) => {
    // type就是你想如何操作这个状态,或者 说如果改变这个状态
    //reducer就一个普通的处理函数，一定要返回一个全新的值
    if(!action){
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
//这是一个工厂函数，可以创建store
//仓库里放着状态和reducer
const  createStore = (reducer) => {
  let state;//存放此仓库的状态对象
   let listeners = [];
  //返回当前状态
  const  getState = ()=> state;
    //定义一个派发函数
    //当在外界调用此函数的时候，会修改状态
  const dispatch = (action)=>{
      //调用reducer函数修改状态，返回一新的状态并赋值给这个局部状态变量
      state = reducer(state,action);
      //依次调用监听函数，通知所有的监听函数
      listeners.forEach(listener => listener());
  }
   //订阅此状态的函数，当状态发生变化的时候记得调用此监听函数
  const subscribe = function(listener){
      //先把此监听 加到数组中
      listeners.push(listener);
      //返回一个函数，当调用它的时候将此监听函数从监听数组移除
      return function(){
          listeners = listeners.filter(l => l != listener);
      }
  }
    //默认调用一次dispatch给state赋一个初始值
   dispatch();
  return {
      getState,
      dispatch,
      subscribe
  }
}
let store = createStore(counter);

const render = ()=>{
    document.body.innerText = store.getState();
}
//订阅状态变化 ，当状态的时候自动调用render方法
let l = store.subscribe(render);
//10秒后之后调用此移除函数
setTimeout(function(){
    l();
},10000);
render();
//为当前的文档注册一个点击的监听，当点击此文档的时候派发一个action到仓库里
document.addEventListener('click',function(){
    store.dispatch({type:'增加'});
})

/*
console.log(store.getState());
store.dispatch({type:'增加'});
console.log(store.getState());
store.dispatch({type:'减少'});
console.log(store.getState());*/


