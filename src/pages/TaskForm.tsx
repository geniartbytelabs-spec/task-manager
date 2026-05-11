import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'
import type { CreateTaskInput } from '../types'

export default function TaskForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addTask, updateTask, getTaskById } = useTasks()

  const existingTask = id ? getTaskById(id) : undefined

  const [formData, setFormData] = useState<CreateTaskInput>({
    title: existingTask?.title || '',
    description: existingTask?.description || '',
    status: existingTask?.status || 'todo',
    priority: existingTask?.priority || 'medium',
  })

  const [errors, setErrors] = useState<Partial<CreateTaskInput>>({})

  function validate() {
    const newErrors: Partial<CreateTaskInput> = {}
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    return newErrors
  }

  function handleSubmit() {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    if (id) {
      updateTask(id, formData)
    } else {
      addTask(formData)
    }
    navigate('/')
  }

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    fontSize: '14px',
    marginTop: '4px',
    boxSizing: 'border-box' as const,
  }

  const errorStyle = { color: '#f44336', fontSize: '12px', marginTop: '4px' }

  return (
    <div style={{ padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>{id ? 'Edit Task' : 'Create Task'}</h1>

      <div style={{ marginBottom: '16px' }}>
        <label>Title</label>
        <input
          style={inputStyle}
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
          placeholder="Task title"
        />
        {errors.title && <p style={errorStyle}>{errors.title}</p>}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label>Description</label>
        <textarea
          style={{ ...inputStyle, height: '100px', resize: 'vertical' }}
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
          placeholder="Task description"
        />
        {errors.description && <p style={errorStyle}>{errors.description}</p>}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label>Status</label>
        <select
          style={inputStyle}
          value={formData.status}
          onChange={e => setFormData({ ...formData, status: e.target.value as CreateTaskInput['status'] })}
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label>Priority</label>
        <select
          style={inputStyle}
          value={formData.priority}
          onChange={e => setFormData({ ...formData, priority: e.target.value as CreateTaskInput['priority'] })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button onClick={handleSubmit} style={{
          padding: '10px 24px',
          backgroundColor: '#1a1a2e',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
        }}>
          {id ? 'Update Task' : 'Create Task'}
        </button>
        <button onClick={() => navigate('/')} style={{
          padding: '10px 24px',
          backgroundColor: '#ddd',
          color: '#333',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
        }}>
          Cancel
        </button>
      </div>
    </div>
  )
}