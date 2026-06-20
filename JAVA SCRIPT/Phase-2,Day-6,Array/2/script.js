// map - transformation

var arr = [1, 2, 3, 4, 5];
console.log(arr);
var arr2= arr.map(function(elem) {
    return elem * 2;
    
});

console.log(arr2);


var brr = ["apple", "banana", "grapes"];
console.log(brr);

var brr2 = brr.map(function(elem) {
    return elem *2;
});
console.log(brr2);



var crr = [true, false, true, false];
console.log(crr);

var crr2 = crr.map(function(elem) {
    return elem *2;
});
console.log(crr2);



var drr = ["apple", "banana", "grapes"];
console.log(drr);

var drr2 = drr.map(function(elem) {
    return elem + " is a fruit";
});
console.log(drr2);