import { Aircraft } from '../../models/Aircraft'
import { ChecklistRaw } from '../../models/ChecklistRaw'
import { airbus320ChecklistData } from './airbus320ChecklistData'
import { boeing737ChecklistData } from './boeing737ChecklistData'

export default {
  getRawChecklistFor: (aircraft: Aircraft): ChecklistRaw => {
    switch (aircraft) {
      case 'a320':
        return airbus320ChecklistData
      case 'b737':
        return boeing737ChecklistData
      default:
        return airbus320ChecklistData
    }
  },
}
