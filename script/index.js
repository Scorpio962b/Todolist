let toDo = [];
let input = document.getElementById('myInput');
  

function addToDo (){
    let person = {
        Id: toDo.indexOf() ,
        name: document.getElementById('myInput').value,
        createdDate: new Date(),
    };
    toDo.push(input);
    console.log(toDo);
}

function sorting() {
    toDo.sort;
}

let listings = document.getElementById('listings').innerHTML;