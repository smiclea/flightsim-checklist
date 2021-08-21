import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  CircularProgressLabel,
  Flex, Heading, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { ChecklistPhase, ChecklistTask, checklistTaskIsSeparator } from '../../../models/checklist'
import useStores from '../../stores/useStores'

export default observer(() => {
  const { checklistStore } = useStores()

  const handlePhaseChange = (phase: ChecklistPhase) => {
    checklistStore.setSelectedPhase(phase)
  }

  const handleTaskChange = (task: ChecklistTask, isDone: boolean) => {
    checklistStore.setTaskDone(task, isDone)
  }

  const handleNextPhaseClick = () => {
    checklistStore.setPhaseToNextPhase()
  }

  const areAllTasksForSelectedPhaseDone = checklistStore.selectedPhase.tasks.filter(t => !checklistTaskIsSeparator(t)).length === checklistStore
    .selectedPhase.tasks.filter(t => !checklistTaskIsSeparator(t) && t.isDone).length
  const phaseIndex = checklistStore.checklist.phases.findIndex(p => p.name === checklistStore.selectedPhase.name)

  return (
    <Flex direction="column" p={4}>
      <Flex align="center" mb={8}>
        <Heading>{checklistStore.checklist.name}</Heading>
        <Spacer />
        <Text fontSize="small">by Sergiu Miclea</Text>
      </Flex>
      <Flex>
        <Tabs
          orientation="vertical"
          index={phaseIndex}
          onChange={idx => { handlePhaseChange(checklistStore.checklist.phases[idx]) }}
          isLazy
        >
          <TabList
            position="fixed"
            left={[-9999, -9999, 'auto']}
          >
            {checklistStore.checklist.phases.map(phase => {
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
          <TabPanels
            position="absolute"
            left={[0, 0, '300px']}
            style={{ width: 'auto' }}
          >
            {checklistStore.checklist.phases.map(phase => {
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
                    <Flex direction="column" mb={8}>
                      {phase.tasks.map((task, i) => (
                        checklistTaskIsSeparator(task) ? <Box height={4} key={i} my={2} /> : (
                          <Flex key={task.id}>
                            <Checkbox
                              key={task.id}
                              isChecked={task.isDone}
                              onChange={e => handleTaskChange(task, e.target.checked)}
                              mb={2}
                              size="lg"
                            >{task.name}
                            </Checkbox>
                            <Box
                              backgroundImage="linear-gradient(to right, white 33%, rgba(255,255,255,0) 0%)"
                              backgroundPosition="bottom"
                              backgroundSize="3px 1px"
                              backgroundRepeat="repeat-x"
                              flexGrow={1}
                              height="20px"
                              mx={4}
                              minW="16px"
                            />
                            <Flex>
                              {task.status}
                            </Flex>
                          </Flex>
                        )
                      ))}
                    </Flex>
                    {checklistStore.nextPhase ? (
                      <Flex direction={['column', 'column', 'row']}>
                        <Button
                          colorScheme={areAllTasksForSelectedPhaseDone ? 'green' : undefined}
                          onClick={() => { handleNextPhaseClick() }}
                        >Next Phase: {checklistStore.nextPhase.name}
                        </Button>
                        <Button
                          variant="ghost"
                          width="115px"
                          ml={[0, 0, 4]}
                          mt={[4, 4, 0]}
                          onClick={() => { checklistStore.toggleTasks(phase, !areAllTasksForSelectedPhaseDone) }}
                        >{areAllTasksForSelectedPhaseDone ? 'Reset' : 'Mark Done'}
                        </Button>
                      </Flex>
                    ) : (
                      <Button onClick={() => { checklistStore.resetAll() }}>Reset All</Button>
                    )}
                  </Flex>
                </TabPanel>
              )
            })}
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  )
})
