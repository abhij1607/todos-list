import React from 'react'

export const Todo = ({todo}) => {
    return (
        <div className="">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger">Delete</button>
        </div>
    )
}
