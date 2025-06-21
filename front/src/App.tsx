import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './modules/dashboard/Dashboard'
import routes from './core/menuRoutes'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {routes.map(route => (
            <Route key={route.path} path={route.path.slice(1)} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
