var arr = [10,20,30,40,50];
console.log(arr); // [10,20,30,40,50]


arr.unshift(5); // adds 5 at the beginning of the array
console.log(arr);

arr.pop(); // removes the last element of the array
console.log(arr);

arr.push(60); // adds 60 at the end of the array
console.log(arr);

arr.shift(); // removes the first element of the array
console.log(arr);

console.log(arr.length); // 4
console.log(arr[0]); // 20
console.log(arr[1]); // 35
arr[2] = 35; // updates the value at index 2 to 35
console.log(arr); // [20, 35, 40, 60]
