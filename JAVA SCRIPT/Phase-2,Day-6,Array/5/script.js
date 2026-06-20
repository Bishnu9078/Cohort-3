// Reduce

var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); 


var brr = [1600,500,400,5000,600];
console.log(brr);
var max= brr.reduce(function(acc,val){
    if(acc>val){
        return acc;
    }else{
        return val;
    }
})
console.log(max); 


var crr = [10,20,30,40,50];
console.log(crr);
var crr2 = crr.reduce(function(acc,val){
    if(val > acc){
        return val;
    }return acc;
    
});
console.log(crr2);