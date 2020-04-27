import React, {useState} from 'react';

const ListTodo = ()=>{
    const todos = localStorage.getItem('todo') || '';
    const [state, setState] = useState({"todos": todos.split()});
    return(
        <div>
            {state.todos[0]}
        </div>
    )
}

export default ListTodo;