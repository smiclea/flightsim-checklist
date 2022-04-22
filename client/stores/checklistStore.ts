import { makeAutoObservable } from 'mobx'
import { v4 as uuid } from 'uuid'
import { Aircraft } from '../../models/Aircraft'
import {
  ChecklistRaw,
  checklistRawTaskIsSeparator,
} from '../../models/ChecklistRaw'
import data from '../data'

export class ChecklistTask {
  private _separator: string | undefined

  get separator() {
    return this._separator
  }

  get isSeparator() {
    return this.separator !== undefined
  }

  private _id = uuid()

  get id() {
    return this._id
  }

  private _name = ''

  get name() {
    return this._name
  }

  private _status = ''

  get status() {
    return this._status
  }

  private _isDone: boolean | undefined

  get isDone() {
    return this._isDone || false
  }

  private _description: string | undefined

  get description() {
    return this._description
  }

  constructor(rawTask: ChecklistRaw['phases'][0]['tasks'][0]) {
    makeAutoObservable(this)

    if (checklistRawTaskIsSeparator(rawTask)) {
      this._separator = rawTask.separator
    } else {
      this._name = rawTask.name
      this._status = rawTask.status
      this._isDone = rawTask.isDone
      this._description = rawTask.description
    }
  }

  toggle(isDone: boolean) {
    this._isDone = isDone
  }
}

export class ChecklistPhase {
  private _name: string

  get name() {
    return this._name
  }

  private _tasks: ChecklistTask[]

  get tasks() {
    return this._tasks
  }

  constructor(rawPhase: ChecklistRaw['phases'][0]) {
    makeAutoObservable(this)
    this._name = rawPhase.name
    this._tasks = rawPhase.tasks.map(t => new ChecklistTask(t))
  }

  toggleTasks(isDone: boolean) {
    this.tasks.forEach(task => {
      task.toggle(isDone)
    })
  }
}

export class Checklist {
  private _name: string

  get name() {
    return this._name
  }

  private _phases: ChecklistPhase[]

  get phases() {
    return this._phases
  }

  constructor(rawChecklist: ChecklistRaw) {
    makeAutoObservable(this)
    this._name = rawChecklist.name
    this._phases = rawChecklist.phases.map(p => new ChecklistPhase(p))
  }
}

class ChecklistStore {
  private _currentChecklist: Checklist

  get currentChecklist() {
    return this._currentChecklist
  }

  private _currentPhase: ChecklistPhase

  get currentPhase() {
    return this._currentPhase
  }

  get nextPhase(): ChecklistPhase | null {
    const currentPhaseIdx = this.currentChecklist.phases.findIndex(p => p.name === this.currentPhase.name)
    if (currentPhaseIdx > -1 && currentPhaseIdx < this.currentChecklist.phases.length - 1) {
      return this.currentChecklist.phases[currentPhaseIdx + 1]
    }
    return null
  }

  constructor() {
    makeAutoObservable(this)
    this._currentChecklist = new Checklist(data.getRawChecklistFor('a320'))
    this._currentPhase = this.currentChecklist.phases[0]
  }

  loadChecklistFor(aircraft: Aircraft) {
    this._currentChecklist = new Checklist(data.getRawChecklistFor(aircraft))
    this.resetAll()
  }

  goToPhase(phase: ChecklistPhase) {
    this._currentPhase = phase
  }

  toggleTask(task: ChecklistTask, isDone: boolean) {
    task.toggle(isDone)
  }

  goToNextPhase() {
    if (this.nextPhase) {
      this._currentPhase = this.nextPhase
    }
  }

  togglePhaseTasks(phase: ChecklistPhase, isDone: boolean) {
    phase.toggleTasks(isDone)
  }

  resetAll() {
    this.currentChecklist.phases.forEach(phase => {
      phase.toggleTasks(false)
    })
    this._currentPhase = this.currentChecklist.phases[0]
  }
}

export const checklistStore = new ChecklistStore()
