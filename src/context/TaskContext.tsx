import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Task, CreateTaskInput, UpdateTaskInput, TaskContextType } from '../types'

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask(input: CreateTaskInput) {
    const newTask: Task = {
      ...input,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setTasks(prev => [...prev, newTask])
  }

  function updateTask(id: string, input: UpdateTaskInput) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, ...input, updatedAt: new Date().toISOString() }
          : task
      )
    )
  }

  function deleteTask(id: string) {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  function getTaskById(id: string) {
    return tasks.find(task => task.id === id)
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, getTaskById }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must be used within TaskProvider')
  return context
}