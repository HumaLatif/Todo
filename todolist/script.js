const todoapp = document.getElementById("todotask");
const list = document.querySelector(".list");

function Add(){
    if(todoapp.value.trim() == ""){
        alert("Please Enter Task")
    }
    else{
        const newitem = document.createElement("div");
        newitem.classList.add("todo-item");
        newitem.innerHTML=`
        <input type="checkbox" class="check-task">
          <span class="task-text">${todoapp.value}</span>
            <i class="fa-solid fa-trash"></i>`;

        list.appendChild(newitem);
        todoapp.value="";

        newitem.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newitem.remove()
        }

         const checkbox = newitem.querySelector(".check-task");
    const taskText = newitem.querySelector(".task-text");

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            newitem.style.textDecoration = "line-through";
             taskText.style.color = "gray";
        } else {
            newitem.style.textDecoration = "none";
            taskText.style.color = "black";
        }
    });
    }
   
    
}
