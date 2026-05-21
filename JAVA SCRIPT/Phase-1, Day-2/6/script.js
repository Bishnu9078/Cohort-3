var gender = prompt("Enter your gender (male/female):");
var age = parseInt(prompt("Enter your age:"));

if (gender === "female") {
    if (age >= 18 && age <= 60) {
        console.log("You are eligible for voting.");
    }else {
        console.log("You are not eligible for voting.");
    }
} else {
    console.log("Not allowed to vote.");
}