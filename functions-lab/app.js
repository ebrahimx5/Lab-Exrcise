/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.
*/

let maxOfTwoNumbers = (num1, num2) => {
    if (num1 > num2) {
        console.log('Exrcise 1 : the biggest number is : ' + num1)
    }
    else if (num1 < num2) {
        console.log('Exrcise 1 :the biggest number is ' + num2)
    }
    else {
        console.log('Exrcise 1 : invaild input')
    }

}

maxOfTwoNumbers(2, 4)

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.
*/

const isAdult = age=> {

    if (age > 18) {
        return "Exrcise 2 : adult"
    }

    else if (age < 18)
        return " Exrcise 2 : minor"
    
    else {
        return " Exrcise 2 : invaild input"
    }
}

console.log(isAdult(24))

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

the vowl : aeiou
*/

const isCharAVowel = letter=>{
    if (letter === 'a' || letter === 'e'|| letter === 'i' || letter === 'o'|| letter === 'u')
        return 'exrcise 3 : true '
    else {
        return ' exrices 3 : false'
    }
}

console.log(isCharAVowel('a'))

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'*/

const generateEmail = (name, email)=> {
    return name + '@' + email
}

console.log(`Exrcise 4 : ${generateEmail('ebrahim', 'gmail.com')}`)

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"*/

const greetUser = (name, time)=>{
    return `Exrcise 5 : Good ${time} ${name}`
}

console.log(greetUser('ebrahim', 'morning'))
console.log(greetUser('ebrahim', 'evening'))

// anthor method to write this code with if statemnt to make sure that user write a spicfic word (morning, evening or afternoon)

const anotherGreeetUser = (name, time)=> {
    if (time === 'morning' || time === 'evening' || time === 'afternoon'){
        return `Exrcise 5 : Good ${time} ${name}`
    }
    else {
        return 'Exrcise 5 : invaild input'
    }
}
console.log(anotherGreeetUser('hussain', 'morning'))
console.log(anotherGreeetUser('hussain', 'monday'))


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.*/

const maxOfThree = (num1, num2, num3)=> {
    if (num1 > num2 && num1 > num3){
        return `Exrcise 6 result : ${num1}`
    }
    else if (num2 > num1 && num2 > num3) {
        return `Exrcise 6 result : ${num2}`
    }
    else if (num3 > num1 && num3 > num2 ) {
        return `Exrcise 6 result : ${num3}`
    }
    else {
        return `Exrcise 6 : invaild input `
    }
}
console.log(maxOfThree(4,17,13))
console.log(maxOfThree(4,'a',13))

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.
*/

const calculateTip = (price, pct)=> {
    
    return `Exrcise 7 result : ${price * (pct/100)}`
}

console.log(calculateTip(50, 20))
console.log(calculateTip(50, 30))

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.*/

const convertTemperature = (degress , type)=>{
    if (type === 'c' || type === 'C') {
        return `Exrcise 8 : ${ degress * (9/5) + 32} Fahrenheit`

    }
    else if (type === 'f' ||type === 'F') {
        return `Exrcise 8 : ${ (degress - 32) * (5/9) * (5/9)} Calsius`
    }
    else {
        return 'invailed input '
    }
}

console.log(convertTemperature(32, 'c'))
console.log(convertTemperature(32, 'F'))


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.*/


const basicCalculator = (num1, num2, operation)=>{
    if (operation === 'add'){
        return `Exrcise 9 result : ${num1 + num2}` 
    }
    else if (operation === 'subtract') {
        return `Exrcise 9 result : ${num1 - num2}`
    }
    else if (operation === 'multiply'){
        return `Exrcise 9 result : ${num1*num2}`
    }
    else if (operation === 'divide') {
        if (num1 > 0 && num2 > 0 ){
            return ` Exrcise 9 result : ${num1/num2}`
        }
        else {
            return `invaild input : You cannot divide any number by zero `

        }
    }
    else {
        return `invaild input `
    }
}

console.log(basicCalculator( 10, 2, 'multiply'))