export default function health(state = 100, action) {
    console.log(arguments)
    switch (action.type) {
        case 'ADD_HEALTH':// 如果增加体力则在原来基础上添加
            return state + action.amount;
        default:
            return state;
    }
}