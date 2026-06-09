var arr = [1, 2, 3, 4, 5];
console.log(arr.splice(1, 2)); // Output: [2, 3, 4]
console.log(arr); // Output: [1, 4, 5]


var b  = [1, 2, 3, 4, 5];
console.log(b.splice(1,2, 6, 7)); // Output: [2, 3]
console.log(b); // Output: [1, 6, 7, 4, 5] 


var c= ['a','b','c','d','e','f','g','h','i','j'];
console.log(c.splice(2, 3, 'x', 'y','z')); // Output: ['c', 'd', 'e']
console.log(c); // Output: ['a', 'b', 'x', 'y', 'z', 'f', 'g', 'h', 'i', 'j']
console.log(c.length); // Output: 10


