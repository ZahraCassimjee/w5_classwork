// let studentFirst = [];
// let studentLast = [];
// let studentAge = [];
// let studentSubject = [];


let allStudent = [];

addStudent = () => {
    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    let age = +document.getElementById("age").value
    let subject = document.getElementById("subject").value

    if(age >= 18){

allStudent.push({
studentFirst: first,
studentLast: last,
studentAge: age,
studentSubject: subject  

})

// studentFirst.push(first);
// studentLast.push(last);
// studentAge.push(age);
// studentSubject.push(subject);

        alert("Student: " + first + " " + last + ", has been added to " + subject);
    } else {
        alert("Student is not old enough for this course");
    }

    console.log(allStudent)
    // console.log(studentFirst);
    // console.log(studentLast);
    // console.log(studentAge);
    // console.log(studentSubject);

  document.getElementById("studentForm").reset();
}

let pizzaOrder = []

makePizza = () =>{

let pizzaCost = 0;

     let pizzaName = document.getElementById("pizzaName").value;
     let size = document.getElementById("size").value;

     if(size ==="Small"){
        pizzaCost= pizzaCost + 20;
     } else if(size === "Medium"){
        pizzaCost = pizzaCost + 40;
     }else if(size === "Large"){
        pizzaCost = pizzaCost + 60;
     }

     // Get Radio Options
    let baseOption = document.getElementsByName("baseRadio");
    let baseValue; 
    for(let i = 0; i < baseOption.length; i++){
        if(baseOption[i].checked){
            baseValue = baseOption[i].value
pizzaCost = pizzaCost + +baseOption[i].dataset.cost
        }
    }

let toppingOptions = document.getElementsByName("toppings");
let topArray = [];
for(let i = 0; i < toppingOptions.length; i++){
    if(toppingOptions[i].checked){
        topArray.push(toppingOptions[i].value)
        pizzaCost = pizzaCost + +toppingOptions[i].dataset.cost
    }
}

pizzaOrder.push({
    pizzaName: pizzaName,
    pizzaSize: size,
    pizzaToppings: topArray,
    pizzaCost : pizzaCost
})

console.log(pizzaOrder)

document.getElementById("pizzaForm").reset();
}





