import React from 'react';

const CreateTodo = ()=>{
    function createNewTodo(e){
        if(e.target.type === 'submit'){
            const todoName  = e.target.previousSibling.value;
            e.target.previousSibling.value='';

            //TODO: Use redux instead.
            let todoList = localStorage.getItem('todo') || [];
            if(typeof(todoList)==='string'){
                todoList = todoList.split(',');
            }
            todoList.push(todoName);
            localStorage.setItem('todo', todoList.join());
        }
    }

    return(
        <div onClick={createNewTodo}>
            <input type="text" /> 
            <button>Add</button>
        </div>
    )
}

export default CreateTodo;