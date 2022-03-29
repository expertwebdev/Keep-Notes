let list = document.getElementById("list");
const dateElement = document.getElementById("date");
const addBtn = document.getElementById("add-btn");
const warnAlert = document.querySelector('.warn')
// let dateElement = new Date()
let options = { weekday:'long', month:'short', day:'numeric'};
let today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-UK', options);


function addToDo() {
    const input = document.getElementById("input");
    let todoMessage = input.value;
    if (todoMessage == '') {
        warnAlert.innerHTML = '*Please Type Something*';
    }
    else {
        let li = document.createElement('li');
        let trash = document.createElement('img');
        trash.src = 'src/img/trash.svg'
        // trash.style.width = "1.5rem";
        trash.className = 'trashBtn';
        li.textContent = todoMessage;
        list.appendChild(li)
        li.appendChild(trash)
        warnAlert.innerHTML = "";
        input.value = "";
        
        trash.addEventListener('click', (e) => {
        list.removeChild(e.target.parentNode)
    });
    } 
}

document.addEventListener("keydown", (event) => {
    if (event.key == 'Enter') {
        addToDo()
    }
})
