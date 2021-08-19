import {
  Button,
  CircularProgress, CircularProgressLabel, Flex,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { Checklist, ChecklistPhase, checklistTaskIsSeparator } from '../../../../../models/checklist'

type Props = {
  checklist: Checklist
  onPhaseClick: (phase: ChecklistPhase) => void
}

export default observer(({ checklist, onPhaseClick }: Props) => (
  <Flex direction="column">
    {checklist.phases.map(phase => {
      const tasksTotal = phase.tasks.filter(t => !checklistTaskIsSeparator(t)).length
      const tasksDone = phase.tasks.filter(t => !checklistTaskIsSeparator(t) && t.isDone).length
      const percentage = (tasksDone / tasksTotal) * 100
      return (
        <Flex
          key={phase.name}
          align="center"
          mb={4}
        >
          <Button
            variant="unstyled"
            pl={2}
            pr={2}
            flexGrow={1}
            textAlign="left"
            onClick={() => onPhaseClick(phase)}
          >{phase.name}
          </Button>
          <CircularProgress ml={4} value={percentage} size="32px" color={percentage === 100 ? 'green' : undefined}>
            <CircularProgressLabel>{Math.floor(percentage)}%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
      )
    })}
  </Flex>
))
