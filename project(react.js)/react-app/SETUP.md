# Quick Start - React + Vite + Tailwind

Simple React project setup. No TypeScript, no complex structure.

## Installation

```bash
cd react-app
npm install
```

## Start Development

```bash
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── App.jsx          # Main component
├── main.jsx         # Entry point
├── index.css        # Global + Tailwind styles
├── App.css          # App styles
├── api.js           # Simple API helper
├── hooks.js         # Custom hooks (useFetch)
└── components.jsx   # Reusable components
```

## What's Included

✅ React 18  
✅ Vite (fast build)  
✅ Tailwind CSS (styling)  
✅ Simple folder structure  
✅ Basic components & hooks  
✅ Environment variables support

## Usage Examples

### Create a Component

```jsx
export function Hello() {
  return <h1 className="text-2xl font-bold">Hello!</h1>
}
```

### Use State

```jsx
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

### Use the useFetch Hook

```jsx
import { useFetch } from './hooks'

export function Users() {
  const { data, loading, error } = useFetch('/api/users')
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
```

### Use API Helper

```jsx
import { fetchData, postData } from './api'

async function getUsers() {
  const users = await fetchData('/users')
  console.log(users)
}

async function addUser() {
  const newUser = await postData('/users', { name: 'John' })
  console.log(newUser)
}
```

### Reusable Components

```jsx
import { Button, Card, Alert } from './components'

export function Dashboard() {
  return (
    <Card title="Dashboard">
      <Alert type="success" message="All good!" />
      <Button label="Click Me" onClick={() => alert('Hi!')} />
    </Card>
  )
}
```

## Tailwind CSS

Style with utility classes:

```jsx
<div className="flex items-center justify-between bg-blue-100 p-4 rounded">
  <h1 className="text-2xl font-bold text-blue-900">Title</h1>
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Button
  </button>
</div>
```

## Environment Variables

Create `.env`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Use in code:

```jsx
const apiUrl = import.meta.env.VITE_API_BASE_URL
```

## Next Steps

1. Edit `src/App.jsx` to customize
2. Create components in `src/components.jsx`
3. Add API endpoints
4. Deploy!

Happy coding! 🚀
