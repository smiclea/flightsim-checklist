import {
  Box, Button, CircularProgress, CircularProgressLabel, Flex, Heading, TabPanel, TabPanels,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import {
  Checklist, ChecklistPhase, ChecklistTask, checklistTaskIsSeparator,
} from '../../../../models/checklist'
import ChecklistTasksList from './ChecklistTasksList'

type Props = {
  checklist: Checklist
  nextPhase: ChecklistPhase | null
  selectedPhase: ChecklistPhase
  onTaskChange: (task: ChecklistTask, isChecked: boolean) => void
  onNextPhaseClick: () => void
  onToggleTasks: (phase: ChecklistPhase, areChecked: boolean) => void
  onResetAll: () => void
}

export default observer(({
  checklist,
  nextPhase,
  onTaskChange,
  onNextPhaseClick,
  selectedPhase,
  onToggleTasks,
  onResetAll,
}: Props) => {
  const areAllTasksForSelectedPhaseDone = selectedPhase.tasks.filter(t => !checklistTaskIsSeparator(t)).length === selectedPhase.tasks
    .filter(t => !checklistTaskIsSeparator(t) && t.isDone).length

  return (
    <TabPanels
      position="absolute"
      left={[0, 0, '300px']}
      style={{ width: 'auto' }}
    >
      {checklist.phases.map(phase => {
        const tasksTotal = phase.tasks.filter(t => !checklistTaskIsSeparator(t)).length
        const tasksDone = phase.tasks.filter(t => !checklistTaskIsSeparator(t) && t.isDone).length
        const percentage = (tasksDone / tasksTotal) * 100
        return (
          <TabPanel pt={0} key={phase.name}>
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
                <Flex direction={['column', 'column', 'row']}>
                  <Button
                    colorScheme={areAllTasksForSelectedPhaseDone ? 'green' : undefined}
                    onClick={onNextPhaseClick}
                  >Next Phase: {nextPhase.name}
                  </Button>
                  <Button
                    variant="ghost"
                    width="115px"
                    ml={[0, 0, 4]}
                    mt={[4, 4, 0]}
                    onClick={() => { onToggleTasks(phase, !areAllTasksForSelectedPhaseDone) }}
                  >{areAllTasksForSelectedPhaseDone ? 'Reset' : 'Mark Done'}
                  </Button>
                </Flex>
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
