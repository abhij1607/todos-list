import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    let containerStyle = {
        minHeight: "46vh"
    }
    return (
        <div className="container" style={containerStyle} >
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display" : ""}
            {props.todos.map((todo) => {
                return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })
            }
        </div>
    )
}
