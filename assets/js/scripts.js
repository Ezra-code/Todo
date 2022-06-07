let inputEl = document.getElementById('input-el')
let addEl = document.querySelector('.input button')
const errorText = document.querySelector("#error-txt")
const ulEl = document.querySelector('#ul-el')
const editBtn = document.getElementById('edit')
let todoItems = []
const todosFromLocalStorage = JSON.parse(localStorage.getItem("todoItems"))
if(todosFromLocalStorage){
    todoItems = todosFromLocalStorage

    todoList(todoItems)
}
addEl.addEventListener('click', (e)=>{
    e.preventDefault()
    if(inputEl.value == ''){
        errorText.style.display = "block"
    }else{
        let item = inputEl.value
        todoItems.push(item)
       console.log(todoItems)
        inputEl.value = ""

        localStorage.setItem("todoItems", JSON.stringify(todoItems))

        todoList(todoItems)
    // activities()
    }
})

inputEl.addEventListener('click', ()=>{
    errorText.style.display = 'none'
})

function todoList(todo){
    let  listItems = ''
    for(let i=0; i<todo.length; i++){
      listItems += `<li> ${todo[i]} <div class="btn"><button id="edit">edit</button><button id="del">delete</button></div></li>`
    }
    ulEl.innerHTML = listItems
}
// editBtn.addEventListener('click', ()=>{
//     editTask()
// })

function editTask(){
    console.log("wacha")
    // let editBar = document.createElement('input')
    // editBar.setAttribute('type=text')
    // document.append(editBar)
}

// function activities(){
//     let item = inputEl.value
//     todoItems.push(item)
//     inputEl.value = ''
//     let  listItems = ''
//     for(let i=0; i<todoItems.length; i++){
//         listItems += ` ${todoItems[i]}`
//     }
//     console.log(listItems)
// }
