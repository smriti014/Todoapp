import React from "react"
import TodoContextProvider from "./context/TodoContextProvider"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
    return (
        <TodoContextProvider>
            <div className="max-w-2xl mx-auto p-6">
                <TodoInput />
                <TodoList />
            </div>
        </TodoContextProvider>
    );
}

export default App
