var arr = [1, 2, 3, 4, 5];
arr[100] = 200;
console.log(arr.length);


var a=[1, 2, 3, 4, 5,'hello',['ab','bc']];
console.log(a);
console.log(a.length);

var b= [1, 2, 3, 4, 5];
console.log(b);
b.reverse();
console.log(b);

var c= [3,4,2,1,5];
console.log(c);
c.sort();
console.log(c);


var d= [11,90,5,4,51,2];
console.log(d);
d.sort();
console.log(d);
d.sort((a,b)=> a-b);
console.log(d);
d.sort((a,b)=> b-a);
console.log(d);