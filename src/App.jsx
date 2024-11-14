import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

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
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };

  // it is possible that when we load/reload our app, there are todos in our local storage. to get those when our app loads we are using useEffect
  // since local storage keeps values in string format, we are converting it into JSON format while gettng
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  // the above useEffect will run only once when the components mount bcz humne enpty dependency array daala hai

  // we are using another useeffect to save todos on change. the below useeffect runs everytime the todos state changes bcz of the dependency on [todos].
  // here we are saving the current state of todos to local storgae by converting it into JSON string. so jab bhi hum add/delete/edit/update krenge to humara todos ko updated rkhega ye
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* yahn Todo form components jaayga */}
            <TodoForm/>
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*yahn todo item loop lgakr add kr rhe */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
