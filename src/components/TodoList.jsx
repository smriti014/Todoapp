import React, { useContext } from "react"
import TodoContext from "../context/TodoContext"

function TodoList() {
    const { todos, deleteTodo, prioritizeTodo } = useContext(TodoContext)

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Todo List</h2>
            {todos.length === 0 ? (
                <p className="text-gray-500 text-center">No todos added yet!</p>
            ) : (
                todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="flex justify-between items-center mb-4 border-b pb-2 last:border-none"
                    >
                        <p className={`text-gray-800 ${todo.isCompleted ? 'line-through text-gray-400' : ''}`}>
                            {todo.todoText}
                        </p>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => prioritizeTodo(todo.id)}
                                className="text-yellow-500 hover:text-yellow-600 transition duration-200"
                            >
                                Prioritize
                            </button>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="text-red-500 hover:text-red-600 transition duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default TodoList
