document.addEventListener("DOMContentLoaded", () => {
  // your code here  
  const form = document.getElementById('create-task-form') 
  form.addEventListener('submit', formSubmitHandler)
});

function formSubmitHandler(e) {
  e.preventDefault()
  const { target } = e
  const value = target['new-task-description'].value
  const newLi = createDomEle('li',titleCase(value))
  appendElement(newLi)
  target.reset()
}

function createDomEle(eleToCreate,newTodo){
  const element = document.createElement(eleToCreate)
  element.textContent = newTodo
  return element 

}
function appendElement(element, elemntToAppendTo=document.getElementById('tasks')){
  elemntToAppendTo.append(element)  
}

function titleCase(sentence){
  const words = sentence.split(' ')
  return words.map(word => {
    const lowerCased = word.toLowerCase()
    return `${lowerCased[0].toUpperCase()}${lowerCased.slice(1)}`
  }).join(" ")

}