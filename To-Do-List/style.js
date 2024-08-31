let todoList = [
    { item: 'Buy Milk', dueDate: '10/08/24' }, 
    { item: 'Go to office', dueDate: '10/08/24' }
];

// Display items on page load
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    
    if (todoItem && todoDate) { // Check if input is not empty
        todoList.push({ item: todoItem, dueDate: todoDate });
        inputElement.value = ''; // Clear input
        dateElement.value = ''; // Clear date
        displayItems(); // Correct function name
    }
}

function displayItems() { // Correct function name
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    
    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i]; // Destructure correctly
        
        newHtml += `
           
                <span>${item}</span>
                <span>${dueDate}</span>
                <button onClick="deleteTodo(${i})">Delete</button>
            
        `;
    }
    
    containerElement.innerHTML = newHtml; // Update HTML
}

function deleteTodo(index) {
    todoList.splice(index, 1); // Remove item from array
    displayItems(); // Refresh display
}
