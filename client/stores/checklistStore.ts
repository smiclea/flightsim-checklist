import { computed, makeAutoObservable } from 'mobx'
import { v4 as uuid } from 'uuid'
import {
  Checklist, ChecklistPhase, ChecklistTask, checklistTaskIsSeparator,
} from '../../models/checklist'
import { airbus320ChecklistData } from '../data/airbus320ChecklistData'

class ChecklistStore {
  checklist: Checklist

  selectedPhase: ChecklistPhase

  get nextPhase(): ChecklistPhase | null {
    const currentPhaseIdx = this.checklist.phases.findIndex(p => p.name === this.selectedPhase.name)
    if (currentPhaseIdx > -1 && currentPhaseIdx < this.checklist.phases.length - 1) {
      return this.checklist.phases[currentPhaseIdx + 1]
    }
    return null
  }

  constructor() {
    makeAutoObservable(this, { nextPhase: computed })
    const newChecklist: Checklist = {
      ...airbus320ChecklistData,
      phases: airbus320ChecklistData.phases.map(p => ({ ...p, tasks: p.tasks.map(t => ({ ...t, id: uuid() })) })),
    }
    this.checklist = newChecklist
    this.selectedPhase = this.checklist.phases[0]
  }

  setSelectedPhase(phase: ChecklistPhase) {
    this.selectedPhase = phase
  }

  setTaskDone(task: ChecklistTask, isDone: boolean) {
    this.checklist.phases.forEach(p => p.tasks.forEach(t => {
      if (!checklistTaskIsSeparator(t) && t.id === task.id) {
        t.isDone = isDone
      }
    }))
  }

  setPhaseToNextPhase() {
    if (this.nextPhase) {
      this.selectedPhase = this.nextPhase
    }
  }

  toggleTasks(phase: ChecklistPhase, done: boolean) {
    phase.tasks.forEach(task => {
      if (!checklistTaskIsSeparator(task)) {
        task.isDone = done
      }
    })
  }

  resetAll() {
    this.checklist.phases.forEach(phase => {
      this.toggleTasks(phase, false)
    })
    this.selectedPhase = this.checklist.phases[0]
  }
}

export const checklistStore = new ChecklistStore()
