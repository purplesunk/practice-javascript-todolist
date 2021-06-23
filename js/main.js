const button = document.querySelector(".add-task--button")
const list = document.querySelector(".task-list")
const textInput = document.querySelector(".task-input")

button.addEventListener('click', event => {
  const target = event.currentTarget
  const input = target.previousElementSibling

  if (!input.value) return

  let listItem = document.createElement("LI")
  let innerItemTask = `<button class="task-selector--button"><span class="material-icons-round task-selector">done</span></button><p class="task-text">${input.value}</p><button class="trash--button"><span class="material-icons-round trash">delete</span></button>`

  listItem.innerHTML = innerItemTask

  list.appendChild(listItem)

  input.value = ''
})

textInput.addEventListener('keypress', event => {
  key = event.key

  if (key !== "Enter") return
  
  button.click()
})

// add a completed selector and a trash button

list.addEventListener('click', event => {
  const target = event.target

  if (!target.closest("button")) return

  const classes = target.classList
  if (classes.contains("task-selector")) {
    classes.toggle("completed")
    const trashButton = target.parentElement.nextElementSibling.nextElementSibling

    trashButton.classList.toggle("show-delete")
  }

  if (classes.contains("trash")) {
    const liElem = target.parentElement.parentElement

    liElem.remove()
  }
})








// Add some things on the list

const itemslist = _ => {
  textInput.value = "make a list"
  button.click()

  textInput.value = "make coffee"
  button.click()

  textInput.value = "wash the dishes"
  button.click()
}

itemslist()
