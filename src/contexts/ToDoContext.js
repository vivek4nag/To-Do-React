/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";


// niche createContext will iniitalize a new context & inside that default value denge. yahn apne todo app me har ek todo as an object ek array me store hoga.
// TodoContext will hold and provide data related to your to-do app, like tasks or methods for adding and deleting them.
// inside the brackets of createcontext i have added the initial structure of cotext value by defining an object with properties and methods the todos array will hold the diff todo added & Methods (addTodo, updateTodo, deleteTodo, toggleComplete): These functions are placeholders that will later hold functionality for manipulating the to-do list. we are just adding empty functions here. These functions will gain functionality in the component (like App.jsx) that wraps the app with Todoprovider because it’s where you can access and modify the to-do list state.
export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo : "todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})



// niche we are creating a custom hook(useTodo) ==> This is a wrapper around useContext to access TodoContext more easily.
// useTodo will return the cuurent value of TodoContext. it will let us access its data or methods wherever we need them in our components.
export const useTodo = () => {
    return useContext(TodoContext)
}


// Exporting the Provider: TodoContext.Provider is the component that wraps your app (or specific parts of it) to make context data available to all nested components.
export const TodoProvider = TodoContext.Provider