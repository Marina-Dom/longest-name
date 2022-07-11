let name1 = prompt("What is the 1st name?");
let name2 = prompt("What is the 2nd name?");
let name3 = prompt("What is the 3rd name?");

let number1 = name1.length;
let number2 = name2.length;
let number3 = name3.length;

if (number1 > number2 && number1 > number3){
    console.log(`${name1} is the longest name.`)
}
else if (number2 > number3 && number2 > number1){
console.log(`${name2} is the longest name.`)
}
else if (number3 > number1 && number3 > number2){
    console.log(`${name3} is the longest name.`)
}
else if (number1 === number2 && number1 > number3){
    console.log(`${name1} and ${name2} are the longest names.`)
}
else if (number1 === number3 && number1 > number2){
    console.log(`${name1} and ${name3} are the longest names.`)
}
else if (number2 === number3 && number2 > number1){
    console.log(`${name2} and ${name3} tie for the longest name.`)
}
else {
    console.log(`All three names are the same length.`)
}

