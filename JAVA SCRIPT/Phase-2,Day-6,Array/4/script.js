// filter- filteration

var arr = ["hi", "hello", "iron", "cat"]
console.log(arr);
var arr2 = arr.filter(function(elem){
    return elem.includes('i')
})

console.log(arr2)



var arr = [1, 2, 3, 4, 5];

var arr2 = arr.filter(function(elem) {
    return elem >= 2;
});

console.log(arr2); // [3, 4, 5]