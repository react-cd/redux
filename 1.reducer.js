var arr = [1,2,3];
//其实是一个处理函数
// 最终会返回一个值
var sum = arr.reduce((curr,next)=>curr+next,0);
console.log(sum);

