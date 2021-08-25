import { makeAutoObservable } from 'mobx'
import { v4 as uuid } from 'uuid'
import {
  Checklist, ChecklistPhase, ChecklistTask, checklistTaskIsSeparator,
} from '../../models/checklist'
import { airbus320ChecklistData } from '../data/airbus320ChecklistData'

class ChecklistStore {
  currentChecklist: Checklist

  currentPhase: ChecklistPhase

  get nextPhase(): ChecklistPhase | null {
    const currentPhaseIdx = this.currentChecklist.phases.findIndex(p => p.name === this.currentPhase.name)
    if (currentPhaseIdx > -1 && currentPhaseIdx < this.currentChecklist.phases.length - 1) {
      return this.currentChecklist.phases[currentPhaseIdx + 1]
    }
    return null
  }

  constructor() {
    makeAutoObservable(this)
    const newChecklist: Checklist = {
      ...airbus320ChecklistData,
      phases: airbus320ChecklistData.phases.map(p => ({ ...p, tasks: p.tasks.map(t => ({ ...t, id: uuid() })) })),
    }
    this.currentChecklist = newChecklist
    this.currentPhase = this.currentChecklist.phases[0]
  }

  goToPhase(phase: ChecklistPhase) {
    this.currentPhase = phase
  }

  toggleTask(task: ChecklistTask, isDone: boolean) {
    this.currentChecklist.phases.forEach(p => p.tasks.forEach(t => {
      if (!checklistTaskIsSeparator(t) && t.id === task.id) {
        t.isDone = isDone
      }
    }))
  }

  goToNextPhase() {
    if (this.nextPhase) {
      this.currentPhase = this.nextPhase
    }
  }

  togglePhaseTasks(phase: ChecklistPhase, done: boolean) {
    phase.tasks.forEach(task => {
      if (!checklistTaskIsSeparator(task)) {
        task.isDone = done
      }
    })
  }

  resetAll() {
    this.currentChecklist.phases.forEach(phase => {
      this.togglePhaseTasks(phase, false)
    })
    this.currentPhase = this.currentChecklist.phases[0]
  }
}

export const checklistStore = new ChecklistStore()
