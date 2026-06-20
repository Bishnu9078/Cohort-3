// problem statement: Given an array of numbers, create a new array where each even number is unchanged and each odd number is multiplied by 2.
var arr = [1, 2, 3, 4, 5];

var arr2 = arr.map(function(elem) {
    if (elem % 2 === 0) {
        return elem;
    }else{
        return elem * 2;
    }
});
console.log(arr2);