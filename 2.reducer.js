/**
 *
 * @param state 就是一个状态 可以是数字，可以是数组，可以是对象 什么都可以
 * @param action 是一个动作对象，有一个必须的属性叫type,就是操作的类型，其它字段随意
 */
const counter = (state = 0, action) => {
    // type就是你想如何操作这个状态,或者 说如果改变这个状态
    //reducer就一个普通的处理函数，一定要返回一个全新的值
    switch (action.type) {
        case '增加':
            return state + 1;
        case '减少':
            return state - 1;
        default:
            return state;
    }
}
console.log(counter(0,{type:'增加'}));
console.log(counter(0,{type:'减少'}));