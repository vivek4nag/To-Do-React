/* eslint-disable no-unused-vars */

import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";

function App() {
  // the following state will have all the todos
  const [todos, setTodos] = useState([]);

  // defining the functions now which were just declared & was just place holder in the context file
  // the todo which is being fed into addTodo is a single todo task taken form the form input, it is not coming from the state varables
  const addTodo = (todo) => {
    // niche basically we are taking purani values in the array & spreading them along with adding new todo
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      return prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo));
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((prevtodo) => prevtodo.id !== id);
    });
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
