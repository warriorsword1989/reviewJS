/**
 * @description
 * @file
 * @author    lingLing
 * @date      2017/12/21
 *
 * @copyright @Navinfo, all rights reserved.
 */
var dataResult = [];
var count = 0
var handle = function (param,i) {
    dataResult[i] = param+ '----'+ i;
    if (count == 50) {
        console.log(dataResult);
    }
}

for (let i = 0; i < 50; i++) {
    let delay = parseInt(Math.random() * 1000);
    setTimeout(function (a) {
        count++;
        handle('延时'+delay+'ms', i);
    }, delay);
}