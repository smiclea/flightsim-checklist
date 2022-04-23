import {
  Box, Button, CircularProgress, CircularProgressLabel, Flex, Heading, TabPanel, TabPanels,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { Checklist, ChecklistPhase, ChecklistTask } from '../../../stores/checklistStore'
import ChecklistTasksList from './ChecklistTasksList'

type Props = {
  checklist: Checklist
  nextPhase: ChecklistPhase | null
  selectedPhase: ChecklistPhase
  hasPreviousPhase: boolean
  onPreviousPhaseClick: () => void
  onTaskChange: (task: ChecklistTask, isChecked: boolean) => void
  onNextPhaseClick: () => void
  onResetAll: () => void
}

export default observer(({
  checklist,
  nextPhase,
  hasPreviousPhase,
  selectedPhase,
  onTaskChange,
  onNextPhaseClick,
  onResetAll,
  onPreviousPhaseClick,
}: Props) => {
  const areAllTasksForSelectedPhaseDone = selectedPhase.tasks.filter(t => !t.isSeparator).length
    === selectedPhase.tasks.filter(t => !t.isSeparator && t.isDone).length

  return (
    <TabPanels
      position="absolute"
      left={[0, 0, '300px']}
      style={{ width: 'auto' }}
    >
      {checklist.phases.map(phase => {
        const tasksTotal = phase.tasks.filter(t => !t.isSeparator).length
        const tasksDone = phase.tasks.filter(t => !t.isSeparator && t.isDone).length
        const percentage = (tasksDone / tasksTotal) * 100
        return (
          <TabPanel pt={0} key={phase.name}>
            {hasPreviousPhase ? (
              <Button
                variant="outline"
                mb={4}
                width="170px"
                onClick={onPreviousPhaseClick}
                display={['block', 'block', 'none']}
              >&lt; Previous Phase
              </Button>
            ) : null}
            <Flex direction="column">
              <Heading size="md" mb={4}>
                <Box display={['inline', 'inline', 'none']} mr={2}>
                  <CircularProgress value={percentage} size="32px" color={percentage === 100 ? 'green' : undefined}>
                    <CircularProgressLabel>{Math.floor(percentage)}%</CircularProgressLabel>
                  </CircularProgress>
                </Box>
                {phase.name} Checklist
              </Heading>
              <ChecklistTasksList tasks={phase.tasks} onTaskChange={onTaskChange} />
              {nextPhase ? (
                <Button
                  colorScheme={areAllTasksForSelectedPhaseDone ? 'green' : undefined}
                  onClick={onNextPhaseClick}
                >Next Phase: {nextPhase.name}
                </Button>
              ) : (
                <Button onClick={onResetAll}>Reset All</Button>
              )}
            </Flex>
          </TabPanel>
        )
      })}
    </TabPanels>
  )
})
