const input = document.querySelector('.inputik')
const add = document.querySelector('.add')
const list = document.querySelector('.list')

add.addEventListener('click', function(){

    let newDiv = document.createElement("div")
    newDiv.className = 'newDiv '
    let edit = document.createElement("button")
    edit.classList.add('edit')
    edit.innerHTML = 'edit'
    edit.setAttribute("readonly","readonly")
    list.appendChild(newDiv)

    const inputV = input.value.trim()
    input.value = ''
    if(!inputV){
        alert('Please fill out the task!')
        return list.innerText = ''
    }

    let inputRead = document.createElement("input")
    inputRead.classList.add('inputRead')
    inputRead.type = 'text'
    inputRead. placeholder = inputV
    inputRead.setAttribute('readonly','readonly')
    let checkbox = document.createElement("input")
    checkbox.className = 'checkbox'
    newDiv.appendChild(checkbox)
    checkbox.type = 'checkbox'
    newDiv.appendChild(inputRead)

    newDiv.appendChild(edit)

    edit.addEventListener('click', ()=>{
        if(edit.innerText == 'edit'){
            inputRead.removeAttribute("readonly")
            inputRead.focus()
            edit.innerText = 'save'
        } else{
            edit.innerText = 'edit'
            inputRead.setAttribute("readonly","readonly")
        }
        if (checkbox.checked) {
            inputRead.classList.add('strikethrough');
          } else {
            inputRead.classList.remove('strikethrough');
          }
        
    })

    let remove = document.createElement('button')
    remove.className = 'remove'
    remove.innerHTML = 'remove'
    newDiv.appendChild(remove)

    remove.addEventListener('click', ()=>{
        newDiv.remove()
    })

    checkbox.addEventListener('click', function (){
        if (checkbox.checked) {
            inputRead.classList.add('strikethrough');
          } else {
            inputRead.classList.remove('strikethrough');
          }
    })
})