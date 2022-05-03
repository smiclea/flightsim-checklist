import { ChecklistRaw } from '../../models/ChecklistRaw'
import { airbus320ChecklistData } from './airbus320ChecklistData'
import { boeing737ChecklistData } from './boeing737ChecklistData'
import { md82ChecklistData } from './md82ChecklistData'

export default {
  getRawChecklistFor: (aircraftRaw: string): ChecklistRaw => {
    switch (aircraftRaw) {
      case 'a320':
        return airbus320ChecklistData
      case 'b737':
        return boeing737ChecklistData
      case 'md82':
        return md82ChecklistData
      default:
        return airbus320ChecklistData
    }
  },
}
