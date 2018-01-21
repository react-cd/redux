export default function health(state = 100, action) {
    switch (action.type) {
        case 'ADD_MAGIC':// 如果增加体力则在原来基础上添加
            return state + action.amount;
        default:
            return state;
    }
}