// Simple reusable components

export function Button({ label, onClick, variant = 'primary' }) {
  const styles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
  }
  
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-semibold transition ${styles[variant]}`}
    >
      {label}
    </button>
  )
}

export function Card({ title, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      {children}
    </div>
  )
}

export function Alert({ type = 'info', message }) {
  const colors = {
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
  }
  
  return (
    <div className={`p-4 rounded ${colors[type]}`}>
      {message}
    </div>
  )
}
