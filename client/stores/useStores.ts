import React from 'react'
import { checklistStore } from './checklistStore'

export default () => React.useContext(React.createContext({ checklistStore }))
