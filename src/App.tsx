import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import TaskDetail from './pages/TaskDetail'
import TaskForm from './pages/TaskForm'
import Login from './pages/Login'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"          element={<Dashboard />} />
        <Route path="/task/:id"  element={<TaskDetail />} />
        <Route path="/create"    element={<TaskForm />} />
        <Route path="/edit/:id"  element={<TaskForm />} />
        <Route path="/login"     element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App