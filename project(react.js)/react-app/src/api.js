// Simple API calls helper
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

export async function fetchData(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`)
  if (!res.ok) throw new Error('API Error')
  return res.json()
}

export async function postData(endpoint, data) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('API Error')
  return res.json()
}
