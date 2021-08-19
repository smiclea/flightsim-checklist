import {
  Button,
  Checkbox,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex, Heading, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { ChecklistPhase, ChecklistTask, checklistTaskIsSeparator } from '../../../models/checklist'
import useStores from '../../stores/useStores'

export default observer(() => {
  const { checklistStore } = useStores()

  const handlePhaseChange = (phase: ChecklistPhase) => {
    checklistStore.setPhase(phase)
  }

  const handleTaskChange = (task: ChecklistTask, isDone: boolean) => {
    checklistStore.setTaskDone(task, isDone)
  }

  const areAllTasksForSelectedPhaseDone = checklistStore.selectedPhase.tasks.filter(t => !checklistTaskIsSeparator(t)).length === checklistStore
    .selectedPhase.tasks.filter(t => !checklistTaskIsSeparator(t) && t.isDone).length
  const phaseIndex = checklistStore.airbusChecklist.phases.findIndex(p => p.name === checklistStore.selectedPhase.name)

  return (
    <Flex direction="column" p={4}>
      <Flex align="center" mb={8}>
        <Heading>Airbus 320 Checklist</Heading>
        <Spacer />
        <Text fontSize="small">by Sergiu Miclea</Text>
      </Flex>
      <Flex>
        <Tabs
          orientation="vertical"
          index={phaseIndex}
          onChange={idx => { handlePhaseChange(checklistStore.airbusChecklist.phases[idx]) }}
          isLazy
        >
          <TabList minW="290px" position="fixed">
            {checklistStore.airbusChecklist.phases.map(phase => {
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
          <TabPanels position="absolute" left="350px" width="auto">
            <TabPanel pt={0}>
              <Flex direction="column">
                <Heading size="md" mb={4}>{checklistStore.selectedPhase.name} Checklist</Heading>
                <Flex direction="column" mb={8}>
                  {checklistStore.selectedPhase.tasks.map((task, i) => (
                    checklistTaskIsSeparator(task) ? <Divider key={i} my={2} /> : (
                      <Checkbox
                        key={task.id}
                        isChecked={task.isDone}
                        onChange={e => handleTaskChange(task, e.target.checked)}
                        mb={2}
                      >{task.name}
                      </Checkbox>
                    )
                  ))}
                </Flex>
                {checklistStore.nextPhase ? (
                  <Button
                    colorScheme={areAllTasksForSelectedPhaseDone ? 'green' : undefined}
                  >Next Phase: {checklistStore.nextPhase.name}
                  </Button>
                ) : null}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      {/* <Flex>
        <Flex pr={8}>
          <AirbusChecklistMenuModule
            checklist={checklistStore.airbusChecklist}
            onPhaseClick={handlePhaseClick}
          />
        </Flex>
        <Flex>
          <AirbusChecklistContentModule
            phase={checklistStore.selectedPhase}
            nextPhase={checklistStore.nextPhase}
            onTaskChange={handleTaskChange}
          />
        </Flex>
      </Flex> */}
    </Flex>
  )
})
