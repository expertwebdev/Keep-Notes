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
        let cancel = document.createElement('h3');
        cancel.textContent = "X";
        li.textContent = todoMessage;
        list.appendChild(li)
        li.appendChild(cancel)
        warnAlert.innerHTML = "";
        input.value = "";
        
        cancel.addEventListener('click', (e) => {
        list.removeChild(e.target.parentNode)
    });
    }
    
}

addBtn.addEventListener("click", addToDo)
document.addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
        addToDo()
    }
})
