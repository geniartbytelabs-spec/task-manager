export interface Task {
  id: string
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  createdAt: string
  updatedAt: string
}

export type CreateTaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>
export type UpdateTaskInput = Partial<CreateTaskInput>

export interface TaskContextType {
  tasks: Task[]
  addTask: (input: CreateTaskInput) => void
  updateTask: (id: string, input: UpdateTaskInput) => void
  deleteTask: (id: string) => void
  getTaskById: (id: string) => Task | undefined
}