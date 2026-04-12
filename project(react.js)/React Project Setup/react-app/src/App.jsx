import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }])
      setInput('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">My App</h1>
          <p className="text-blue-100">Simple React Counter & Todo List</p>
        </div>

        {/* Counter Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter</h2>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCount(count - 1)}
              className="px-6 py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600"
            >
              - Minus
            </button>
            <div className="text-5xl font-bold text-blue-600">{count}</div>
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600"
            >
              + Plus
            </button>
          </div>
          <button
            onClick={() => setCount(0)}
            className="w-full mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg font-bold hover:bg-gray-400"
          >
            Reset
          </button>
        </div>

        {/* Todo Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Todo List</h2>
          
          {/* Input */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Enter a new todo..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTodo}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600"
            >
              Add
            </button>
          </div>

          {/* Todo List */}
          <div className="space-y-2">
            {todos.length === 0 ? (
              <p className="text-gray-400 text-center py-4">No todos yet. Add one to get started!</p>
            ) : (
              todos.map(todo => (
                <div key={todo.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                  <span className="text-gray-800">{todo.text}</span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Stats */}
          {todos.length > 0 && (
            <div className="mt-4 text-sm text-gray-600 text-center">
              You have <strong>{todos.length}</strong> todo{todos.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-blue-100 text-sm">
          <p>Made with React ⚛️ | Tailwind CSS 🎨</p>
        </div>
      </div>
    </div>
  )
}
