let arr = [1, 2, 3, 4, 5];

arr.slice(1, 4);              // [2, 3, 4]  (original unchanged)
console.log(arr);
arr.concat([6, 7]);           // [1, 2, 3, 4, 5, 6, 7]
console.log(arr);
arr.includes(3);              // true
console.log(arr);
arr.indexOf(3);               // 2
console.log(arr);
arr.indexOf(99);              // -1 (not found)
console.log(arr);
arr.join("-");   
console.log(arr); // "1-2-3-4-5"