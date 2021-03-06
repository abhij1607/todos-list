import './App.css';
import Header from './MyComponents/Header'
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.getItem("todos");
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    { todos.length ? sno = todos[todos.length - 1].sno + 1 : sno = 0 }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
      <Header brand="My todo list" />
      <Routes>
          <Route path="/" element={
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>
            } >
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
        </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
