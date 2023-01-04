//Assignment 7 arrays 

//create an array object of employees and return the employee object with age less than 50 years.
let employeeDetails=[
    {
        name: "jay",
        email: null,
        age: 20,
        address: null,
        phoneNumber: null,
        gender: "male",
        married: null,
    },
    {
        name: "sky",
        email: null,
        age: 25,
        address: null,
        phoneNumber: null,
        gender: "male",
        married: null,
    },
    {
        name: "ram",
        email: null,
        age: 55,
        address: null,
        phoneNumber: null,
        gender: "male",
        married: null,
    },
    {
        name: "shyam",
        email: null,
        age: 51,
        address: null,
        phoneNumber: null,
        gender: "male",
        married: null,
    }
    
]
// console.log(employeeDetails)

let result=employeeDetails.filter((a)=>{
     return   a.age<50
})
console.log(result)