// import React from 'react'

import { useState } from "react";
import { useTodo } from "../contexts";

const TodoForm = () => {
  // we are defining state for individual todo
  const [todo, setTodo] = useState("");

  //below we are using the useTodo which is just wraapping the useContext hook. & we can now directly use the function being defined there without need for prop drilling
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write To-do here..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
