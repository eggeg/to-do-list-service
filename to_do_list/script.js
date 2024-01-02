const inputBox = document.getElementById("input-box");   
const listContainer = document.getElementById("list-container");   

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); //li will be added to the listContainer
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); //span will be added to the list
    }
    inputBox.value = '';
    saveData(); //save data to local storage after adding a task
}

// Add a "checked" symbol when clicking on a list item
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData(); //save data to local storage after checking a task
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData(); //save data to local storage after deleting a task  
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();