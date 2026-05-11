import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      backgroundColor: '#1a1a2e',
      color: 'white',
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' }}>
        Task Manager
      </Link>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link to="/create" style={{ color: 'white', textDecoration: 'none' }}>
          + New Task
        </Link>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
          Login
        </Link>
      </div>
    </nav>
  )
}