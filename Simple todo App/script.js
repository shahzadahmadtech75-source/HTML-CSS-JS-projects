//* Select DOM Elements
const input = document.getElementById("todo-input")
const addbtn = document.getElementById("add-btn")
const list = document.getElementById("todo-list")

//Try to load save todos from local storage(if present)
const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];




function savetodo() {
    // Save current todo in local storage
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Create a DoM node for a todo object and append it to the list
function createTodonode(todo, index) {
    const li = document.createElement('li');
    // Checkbox to togg;e completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;

        //TODO:  Visual feedback: Strikethrough when completed
        textspan.style.textDecoration =todo.completed? "line-through" : "";
        savetodo();
    })
    const textspan = document.createElement("span");
    textspan.textContent = todo.text;
    textspan.style.margin = "0 8px";
    if (todo.completed) {
        textspan.style.textDecoration = "line-through"
    }
        //Add double click event listener
        textspan.addEventListener("dblclick", () => {
            const newtext = prompt("Edit TODO", todo.text);
            if (newtext !== null) {
                todo.text = newtext.trim()
                textspan.textContent = todo.text;
                savetodo();
            }
        })
        // Delete button
        const delbtn = document.createElement('button');
        delbtn.textContent = "Delete";
        delbtn.addEventListener('click',()=>{
            todos.splice(index,1);
            render();
            savetodo();
        })

        li.appendChild(checkbox);
        li.appendChild(textspan);
        li.appendChild(delbtn);
        return li;
    }


// Render the whole todo list from todos array
function render() {
    list.innerHTML = '';

    // Recreate each item

    todos.forEach( (todo, index)=> {
        const node = createTodonode(todo, index);
        list.appendChild(node)
    })
}

function addtodo(){

    const text = input.value.trim();
    if (!text){
        return
    }
    //push a new todo object
    todos.push({text, completed: false});
    input.value = '';
    render();
    savetodo();
}
addbtn.addEventListener('click',addtodo);

// enter key assumption
input.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        addtodo();
    }
})
render();