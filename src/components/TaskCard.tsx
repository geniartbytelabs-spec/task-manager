import { Link } from 'react-router-dom'
import type { Task } from '../types'

interface TaskCardProps {
  task: Task
  onDelete: (id: string) => void
}

export default function TaskCard({ task, onDelete }: TaskCardProps) {
  const priorityColor = {
    low: '#4caf50',
    medium: '#ff9800',
    high: '#f44336',
  }

  const statusColor = {
    'todo': '#90a4ae',
    'in-progress': '#42a5f5',
    'done': '#66bb6a',
  }

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <h3 style={{ margin: 0 }}>{task.title}</h3>
        <span style={{
          backgroundColor: priorityColor[task.priority],
          color: 'white',
          padding: '2px 8px',
          borderRadius: '12px',
          fontSize: '12px',
        }}>
          {task.priority}
        </span>
      </div>

      <p style={{ color: '#666', marginBottom: '12px' }}>{task.description}</p>

      <span style={{
        backgroundColor: statusColor[task.status],
        color: 'white',
        padding: '2px 8px',
        borderRadius: '12px',
        fontSize: '12px',
      }}>
        {task.status}
      </span>

      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <Link to={`/task/${task.id}`} style={{
          padding: '6px 12px',
          backgroundColor: '#1a1a2e',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none',
          fontSize: '14px',
        }}>
          View
        </Link>
        <Link to={`/edit/${task.id}`} style={{
          padding: '6px 12px',
          backgroundColor: '#42a5f5',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none',
          fontSize: '14px',
        }}>
          Edit
        </Link>
        <button onClick={() => onDelete(task.id)} style={{
          padding: '6px 12px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
        }}>
          Delete
        </button>
      </div>
    </div>
  )
}