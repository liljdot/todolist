let items = [
    {
        id: 12,
        content: 'balablu'
    }
]

let doneItems = []

const renderItems = () => {
    items.forEach(item => {
        const newItem = document.createElement('li')
        const xButton = document.createElement('button')
        const done = document.createElement('input')
        done.setAttribute('type', 'checkbox')
        done.setAttribute('id', item.id)
        done.addEventListener('click', addDoneItem)
        xButton.setAttribute('id', item.id)
        xButton.setAttribute('class', 'xbutton')
        xButton.textContent = 'X'
        xButton.addEventListener('click', removeItem)
        newItem.setAttribute('id', item.id)
        newItem.textContent = item.content
        newItem.prepend(done)
        document.getElementById('items').appendChild(newItem)
        newItem.appendChild(xButton)
    })
}

const renderDoneItems = () => {
    document.getElementById('done').innerHTML = null
    doneItems.forEach(item => {
        const doneItem = document.createElement('li')
        doneItem.setAttribute('id', item.id)
        const checkedBox = document.createElement('input')
        checkedBox.setAttribute('type', 'checkbox')
        checkedBox.setAttribute('checked', '')
        checkedBox.setAttribute('id', item.id)
        checkedBox.addEventListener('click', undoneItem)
        const xButton = document.createElement('button')
        xButton.setAttribute('id', item.id)
        xButton.setAttribute('class', 'xbutton')
        xButton.textContent = 'X'
        xButton.addEventListener('click', removeDoneItem)
        doneItem.textContent = item.content
        doneItem.prepend(checkedBox)
        doneItem.appendChild(xButton)
        document.getElementById('done').appendChild(doneItem)
    })
}

const addDoneItem = (e) => {
    const newDoneItem = items.filter(item => item.id == e.target.id)
    console.log(newDoneItem)
    doneItems.unshift(newDoneItem[0])
    console.log(doneItems)
    
    removeItem(e)
    renderDoneItems()

}

const undoneItem = (e) => {
    const undoneItem = doneItems.filter(item => item.id == e.target.id)
    console.log(items)
    console.log(undoneItem[0])
    items.unshift(undoneItem[0])
    removeDoneItem(e)
    document.getElementById('items').innerHTML = null
    renderItems()
}

const addItem = (e) => {
    //e.preventDefault()
    const toDo = document.getElementById('new-item').value
    if (toDo) {
        console.log(toDo)

        const item = {
            id: Date.now(),
            content: toDo
        }

        items.unshift(item)
        document.getElementById('items').innerHTML = null
        renderItems()

        document.getElementById('new-item').value = ''
    } else { null }

}

const removeItem = (e) => {
    //e.preventDefault()
    console.log(e.target.id)
    const newArr = items.filter(item => item.id != e.target.id)
    console.log(newArr)
    items = newArr
    document.getElementById('items').innerHTML = null
    renderItems()
}

const removeDoneItem = (e) => {
    const newArr = doneItems.filter(item => item.id != e.target.id)
    doneItems = newArr
    renderDoneItems()
}

console.log(Date.now())

renderItems()
renderDoneItems()



