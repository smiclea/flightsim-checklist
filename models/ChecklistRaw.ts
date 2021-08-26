export type ChecklistSeperator = { isSeparator: true }

export const checklistRawTaskIsSeparator = (
  task: ChecklistRaw['phases'][0]['tasks'][0],
): task is ChecklistSeperator => (task as ChecklistSeperator).isSeparator !== undefined

export type ChecklistRaw = {
  name: string
  phases: {
    name: string,
    tasks: ({
      name: string
      description?: string
      status: string
      isDone?: boolean
    } | { isSeparator: true })[]
  }[]
}
