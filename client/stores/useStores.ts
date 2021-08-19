import React from 'react'
import { checklistStore } from './checklistStore'

const context = React.createContext({
  checklistStore,
})

export default () => React.useContext(context)
