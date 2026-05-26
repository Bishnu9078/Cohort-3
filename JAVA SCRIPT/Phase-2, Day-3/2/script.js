//Ask user any number and print its table

var num = Number(prompt("Enter a number to print its table: "));

var a = 1;
while(a <= 10){
    console.log(num + " x " + a + " = " + (num*a));
    a++
}