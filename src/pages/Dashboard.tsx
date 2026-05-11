import { useTasks } from '../context/TaskContext'
import TaskCard from '../components/TaskCard'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const { tasks, deleteTask } = useTasks()

  return (
    <div style={{ padding: '32px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ margin: 0 }}>My Tasks ({tasks.length})</h1>
        <Link to="/create" style={{
          padding: '10px 20px',
          backgroundColor: '#1a1a2e',
          color: 'white',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}>
          + New Task
        </Link>
      </div>

      {tasks.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '80px', color: '#999' }}>
          <p style={{ fontSize: '18px' }}>No tasks yet!</p>
          <Link to="/create" style={{ color: '#42a5f5' }}>Create your first task</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} onDelete={deleteTask} />
          ))}
        </div>
      )}
    </div>
  )
}