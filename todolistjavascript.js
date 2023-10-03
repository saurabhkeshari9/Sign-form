
function addTask(){
const old_notes = JSON.parse(localStorage.getItem('stickynote'));
const info = document.getElementById('textbox').value;

const objNote = {textbox: info};

if (old_notes){
    old_notes.push(objNote)
    localStorage.setItem('stickynote', JSON.stringify(old_notes))
}
 else{
    localStorage.setItem('stickynote', JSON.stringify([objNote]))
}

textbox.value="";

showList()
}

function showList(){
    let outPut = '';
    const showitem = JSON.parse(localStorage.getItem('stickynote'));
    const task = document.getElementById('tasks');
   
    showitem.map((object, index) => {
        outPut += `
    <div class ="object.textbox">
    <p class="textsize" id="paragrapher">${object.textbox}
    <button class ="deleteTask" onclick="deleteItem(${index})">❌</button>
    <button class ="editTask" onclick="editItem(${index})">📝</button>
    </p>
    <button id="pusher" onclick="addTasker(${index})">Update</button>
    
    </div>`});

    task.innerHTML= outPut;
    
}
showList()

function deleteItem(index){
    const old_notes = JSON.parse(localStorage.getItem('stickynote'));
    const showitem = JSON.parse(localStorage.getItem('stickynote'));
    old_notes.splice(index,1)
    localStorage.setItem('stickynote', JSON.stringify(old_notes));
    showList();
    }


function editItem(index){
const old_notes = JSON.parse(localStorage.getItem('stickynote'));
document.getElementById("textbox").value = old_notes[index].textbox;
localStorage.setItem('stickynote', JSON.stringify(old_notes));
document.querySelector('#pusher').style.display ="block";
}

function addTasker(funindex) {
    const old_notes = JSON.parse(localStorage.getItem('stickynote'));
    const task = document.getElementById('tasks');
    fieldData = document.getElementById("textbox").value
    old_notes.map((item, index)=>{
        if (funindex === index) {
        item.textbox = fieldData
        localStorage.setItem('stickynote', JSON.stringify(old_notes));
       }
       
       showList();
    })
        
}