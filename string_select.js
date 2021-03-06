/** 
 * 判断一个字符串中出现次数最多的字母
 * 
*/
function maxCount(str) {
    var obj = {};
    for(var i = 0; i < str.length;i++) {
        var key =  str[i];
        if(obj[key]) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }

    var maxCount = 0;
    var maxString = "";
    for(var key in obj) {
        if(maxCount < obj[key]) {
            maxCount = obj[key];
            maxString = key;
        }
    }
    return "出现最多的字母"+maxString+"出现了"+maxCount+"次";
}

var str = "accadeersdese";
console.log(maxCount(str));
