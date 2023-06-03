let toDo = [];

function undo(){
    toDo.pop()
    console.log(toDo)
}

console.log(toDo)

function addToDo (){
  
    let item = {
        Id: toDo.indexOf() ,
        name: document.getElementById("myInput").value,
        createdDate: new Date(),
    };
    toDo.push(item);
    console.log(toDo);
}

function sorting() {
    let sortArray = toDo.sort().asc.describe('first', () => { second })
     sortArray.forEach(item => {
        if (item === style.line("line-through"));
        
        else {
            return sortArray;
        }
     });
}
let listings = document.getElementById('listings').innerHTML;
