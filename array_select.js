/**
 * 数组去重   方法一
 */
function unique(arr) {
    console.log(arr);
    var tempObj = {}; //新建一个临时对象
    var tempArr = []; //新建一个临时数组
    for (var i = 0; i < arr.length; i++) {
        if(!tempObj[arr[i]]) {
            tempObj[arr[i]] = true;
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}
var arr1 = [1,2,3,1,2,4];
console.log("arr1:",unique(arr1));

/**
 * 数组去重   方法二
 * 用es6新增的Set来实现，Set是一种数据结构，它和数组非常相似，但是成员的值都是唯一的。
 * 我们可以把arr先转换为Set，再配合...结构运算符重新转化为数组
 */
var arr = [1,2,3,1,2,4];
var arr1 = [...new Set(arr)];
console.log(arr1);

/**
 * 数组去重   方法三
 * indexOf() – 返回字符串中一个子串第一处出现的索引。如果没有匹配项，返回 -1
 * push() 向数组的末尾添加一个或多个元素，并返回新的长度
 */
var arr = [1,2,3,1,2,4];
var arr1 = [];
for(var i = 0; i < arr.length; i++) {
    if(arr1.indexOf(arr[i]) == -1) {
        arr1.push(arr[i]);
    }
}
console.log(arr1);