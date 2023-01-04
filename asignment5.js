//Assignment 5

//Take two no.s and print the smallest one amongst them 

let a = 1, b = 5;

if (a > b) {
    console.log("Among", a, "and", b, "smallest number is ", b)
}
else {
    console.log("Among", a, "and", b, "smallest number is ", a)
}

//Take three no.s and print the biggest one amongst them 

let x = 5, y = 10, z = 15;

if (x > y && x >> z) {
    console.log("the greatest number among", x, ",", y, "and", z, "is", x);
}
else if (y > x && y >> z) {
    console.log("the greatest number among", x, ",", y, "and", z, "is", y);

}
else {
    console.log("the greatest number among", x, ",", y, "and", z, "is", z);
}


//switch case
let marks = 80
let result = marks;

switch (result) {
    case 100: {
        console.log("A")
        break;
    }
    case 90: {
        console.log("B")
        break;
    }
    case 80:
        console.log("C")
        break;
    case 70:
        console.log("D")
        break;
    case 60:
        console.log("E")
        break;



    default:
        console.log("Failed")
        break;
}