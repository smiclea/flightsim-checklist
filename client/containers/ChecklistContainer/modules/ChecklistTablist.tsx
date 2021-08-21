import {
  CircularProgress, CircularProgressLabel, Spacer, Tab, TabList,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { Checklist, checklistTaskIsSeparator } from '../../../../models/checklist'

type Props = {
  checklist: Checklist
}

export default observer(({ checklist }: Props) => (
  <TabList
    position="fixed"
    left={[-9999, -9999, 'auto']}
  >
    {checklist.phases.map(phase => {
      const tasksTotal = phase.tasks.filter(t => !checklistTaskIsSeparator(t)).length
      const tasksDone = phase.tasks.filter(t => !checklistTaskIsSeparator(t) && t.isDone).length
      const percentage = (tasksDone / tasksTotal) * 100
      return (
        <Tab justifyContent="start" key={phase.name}>
          {phase.name}
          <Spacer />
          <CircularProgress ml={4} value={percentage} size="32px" color={percentage === 100 ? 'green' : undefined}>
            <CircularProgressLabel>{Math.floor(percentage)}%</CircularProgressLabel>
          </CircularProgress>
        </Tab>
      )
    })}
  </TabList>

))
