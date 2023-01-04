// //Assignment 6


// //find sum of first 10 natural numbers

// // using for loop
let sum=0;
let n=10;
for (let i = 0; i <= n; i++) {
    sum+=i;
}
console.log("the sum of first 10 natural numbers are",sum)


// // using while loop 
let j=0,summation=0;
while (j<=n) {
    summation+=j;
    j++;

}
console.log("the sum of first 10 natural numbers are",summation)


// using do-while loop
let a=0;
j=0;
do {
    a=a+j;
    j++;
} while (j<=n);
console.log("the sum of first 10 natural numbers are",a)



// finbonacci series using loop

let number1=0,number2=1,next_num;

console.log("the fibnacci series for first 10 naturals no. is ")

for (let i = 0; i <= 10; i++) {
    console.log(number1)
    next_num=number1+number2;
    number1=number2;
    number2=next_num;
    
}





const employeeDetails = {
    name: "jay",
    email: "jaybaldwa123@gmail.com",
    age: 20,
    address: `106, hb sch no 94`,
    phoneNumber: 7974749174,
    gender: "male",
    married: true,
}
for (let a in employeeDetails) {
     {
        console.log(a)
        
    }
}

for (let b of employeeDetails ) {
    console.log(b)
}