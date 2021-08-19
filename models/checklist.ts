export type ChecklistTask = {
  id: string
  name: string
  description?: string
  status: string
  isDone?: boolean
}

export type ChecklistSeperator = { isSeparator: true }

export const checklistTaskIsSeparator = (task: ChecklistTask | ChecklistSeperator): task is ChecklistSeperator => (
  task as ChecklistSeperator).isSeparator !== undefined

export type ChecklistPhase = {
  name: string
  tasks: (ChecklistTask | ChecklistSeperator)[]
}

export type Checklist = {
  name: string
  phases: ChecklistPhase[]
}

export type ChecklistRaw = Omit<Checklist, 'phases'> & {
  phases: (Omit<ChecklistPhase, 'tasks'> & {
    tasks: (Omit<ChecklistTask, 'id'> | ChecklistSeperator)[]
  })[]
}
