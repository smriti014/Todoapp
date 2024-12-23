import React, { useState } from "react"
import TodoContext from "./TodoContext"

function TodoContextProvider({ children }) {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        if (!text) return;

        const todo = {
            todoText: text,
            isCompleted: false,
            id: Date.now(),
        }

        setTodos((prev) => [...prev, todo])
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id))
    }

    const prioritizeTodo = (id) => {
        setTodos((prev) => {
            const todo = prev.find((item) => item.id === id);
            const filtered = prev.filter((item) => item.id !== id);
            return [todo, ...filtered];
        })
    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-6">
            <TodoContext.Provider value={{ addTodo, todos, deleteTodo, prioritizeTodo }}>
                {children}
            </TodoContext.Provider>
        </div>
    )
}

export default TodoContextProvider
