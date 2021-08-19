import {
  Flex, Heading, Spacer, Text,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { ChecklistPhase, ChecklistTask } from '../../../models/checklist'
import useStores from '../../stores/useStores'
import AirbusChecklistContentModule from './modules/AirbusChecklistContentModule/AirbusChecklistContentModule'
import AirbusChecklistMenuModule from './modules/AirbusChecklistMenuModule/AirbusChecklistMenuModule'

export default observer(() => {
  const { checklistStore } = useStores()

  const handlePhaseClick = (phase: ChecklistPhase) => {
    checklistStore.setPhase(phase)
  }

  const handleTaskChange = (task: ChecklistTask, isDone: boolean) => {
    checklistStore.setTaskDone(task, isDone)
  }

  return (
    <Flex direction="column" p={4}>
      <Flex align="center" mb={8}>
        <Heading>Airbus 320 Checklist</Heading>
        <Spacer />
        <Text fontSize="small">by Sergiu Miclea</Text>
      </Flex>
      <Flex>
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
      </Flex>
    </Flex>
  )
})
