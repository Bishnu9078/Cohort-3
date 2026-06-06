var a = [10,20,30,40,50];
console.log(a);

var b = ["Hello", "World", "JavaScript", "Programming"];
var c = [1, "Hello", true, null, undefined];
var d = [[1,2,3], [4,5,6], [7,8,9]];
var e= [10, 1.1, 1.0,0.1,1.000000000000,1.05,1.440000,"hii"]
let f = [10,20,30,40,50];

console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(e[1]);
console.log(a.length);
console.log(a.length-1);

console.log(typeof a);

console.log(f);
f.push(60);
f.push(70);
console.log(f);

f.pop();
console.log(f);

f.push('Hii');
console.log(f);

f.unshift('Bye');
console.log(f);