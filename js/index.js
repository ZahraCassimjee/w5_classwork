
addStudent = () => {
    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    let age = +document.getElementById("age").value
    let subject = document.getElementById("subject").value

    if(age >= 18){
        alert("Student: " + first + " " + last + ", has been added to " + subject);
    } else {
        alert("Student is not old enough for this course");
    }

}

makePizza = () =>{

     let pizzaName = document.getElementById("pizzaName").value;
     let size = document.getElementById("size").value;

     // Get Radio Options
    let baseOption = document.getElementsByName("baseRadio");
    let baseValue; 
    for(let i = 0; i < baseOption.length; i++){
        if(baseOption[i].checked){
            baseValue = baseOption[i].value
        }
    }
}





