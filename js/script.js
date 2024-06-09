document.addEventListener('DOMContentLoaded', function() {
    const todos = [];
    const RENDER_EVENT = 'render-todo';

    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo(); 
    })

    function addTodo() {
        const taskTodo = document.getElementById('title').value;
        const timeTodo = document.getElementById('date').value;
        
        const generateID = generateId();
        const todoObject = generateTodoObject(generateID, taskTodo, timeTodo, false);
        todos.push(todoObject);
        
        document.dispatchEvent(new Event(RENDER_EVENT));
    }

    function generateId() {
        return +new Date();
    }

    function generateTodoObject(id, task, time, isCompleted) {
        return {
            id,
            task,
            time,
            isCompleted
        }
    }

    document.addEventListener(RENDER_EVENT, function() {
        console.log(todos);
    })
})