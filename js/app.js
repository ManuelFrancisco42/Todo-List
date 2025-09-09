const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector(".search input")


const generateTemplate = (todo) => {
  const newHTML = `
     <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
     </li>
    `;
  list.innerHTML += newHTML;
};

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset()
  }
});


// delete todos 
list.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete")) {
        event.target.parentElement.remove()
    }
})


const filterTodos = (term) => {
 console.log(term);
 Array.from(list.children)
   .filter((todo) => {
    return !todo.textContent.toLowerCase().includes(term)
   })
   .forEach((todo) => {
    return todo.classList.add("filtered")
   })


 Array.from(list.children)
   .filter((todo) => {
    return todo.textContent.toLowerCase().includes(term)
   })
   .forEach((todo) => {
    return todo.classList.remove("filtered")
   })
}

 
// keyup event
search.addEventListener("keyup", (event) => {
    const term = search.value.trim().toLowerCase()
/*     if (term === "Buy") {
        console.log("yes");
    } else {
        console.log("Hell no");
        
    } */

        filterTodos(term)
})