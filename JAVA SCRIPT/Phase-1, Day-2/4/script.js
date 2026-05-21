var physicsMark = Number(prompt("Enter your physics mark:"));
var chemistryMark = Number(prompt("Enter your chemistry mark:"));
var mathMark = Number(prompt("Enter your math mark:"));


a= (physicsMark + chemistryMark + mathMark) / 3;

if (a >= 85) {
    console.log("You have passed");
} else {
    console.log("You have not passed");
}
