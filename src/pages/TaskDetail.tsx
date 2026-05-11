import { useParams, useNavigate, Link } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'

export default function TaskDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getTaskById, deleteTask } = useTasks()

  const task = id ? getTaskById(id) : undefined

  if (!task) {
    return (
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <p>Task not found.</p>
        <Link to="/">Go back</Link>
      </div>
    )
  }

  function handleDelete() {
    deleteTask(task!.id)
    navigate('/')
  }

  const priorityColor = { low: '#4caf50', medium: '#ff9800', high: '#f44336' }
  const statusColor = { 'todo': '#90a4ae', 'in-progress': '#42a5f5', 'done': '#66bb6a' }

  return (
    <div style={{ padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#42a5f5', textDecoration: 'none' }}>← Back to Dashboard</Link>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '24px',
        marginTop: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h1 style={{ margin: 0 }}>{task.title}</h1>
          <span style={{
            backgroundColor: priorityColor[task.priority],
            color: 'white',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '14px',
          }}>
            {task.priority}
          </span>
        </div>

        <span style={{
          backgroundColor: statusColor[task.status],
          color: 'white',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '14px',
        }}>
          {task.status}
        </span>

        <p style={{ marginTop: '16px', color: '#444', lineHeight: '1.6' }}>{task.description}</p>

        <p style={{ color: '#999', fontSize: '12px' }}>
          Created: {new Date(task.createdAt).toLocaleString()}
        </p>

        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <Link to={`/edit/${task.id}`} style={{
            padding: '10px 20px',
            backgroundColor: '#42a5f5',
            color: 'white',
            borderRadius: '6px',
            textDecoration: 'none',
          }}>
            Edit
          </Link>
          <button onClick={handleDelete} style={{
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}