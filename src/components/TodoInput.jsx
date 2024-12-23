import React, { useState, useContext } from "react"
import TodoContext from "../context/TodoContext"

function TodoInput() {
    const [input, setInput] = useState("")
    const { addTodo } = useContext(TodoContext)

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput(""); // Clear input field after adding
    }

    return (
        <div className="mb-6">
            <input
                type="text"
                value={input}
                className="p-3 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a new task"
            />
            <button
                onClick={handleAddTodo}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"
            >
                Add Task
            </button>
        </div>
    )
}

export default TodoInput
