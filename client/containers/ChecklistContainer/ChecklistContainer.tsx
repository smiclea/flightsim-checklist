import {
  Flex, Heading, Spacer, Tabs, Text,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { ChecklistPhase } from '../../../models/checklist'
import useStores from '../../stores/useStores'
import ChecklistPanels from './modules/ChecklistPanels'
import ChecklistTablist from './modules/ChecklistTablist'

export default observer(() => {
  const { checklistStore } = useStores()

  const handlePhaseChange = (phase: ChecklistPhase) => {
    checklistStore.setSelectedPhase(phase)
  }

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
          <ChecklistTablist checklist={checklistStore.checklist} />
          <ChecklistPanels
            checklist={checklistStore.checklist}
            nextPhase={checklistStore.nextPhase}
            selectedPhase={checklistStore.selectedPhase}
            onNextPhaseClick={() => { checklistStore.setPhaseToNextPhase() }}
            onTaskChange={(task, isChecked) => { checklistStore.setTaskDone(task, isChecked) }}
            onResetAll={() => { checklistStore.resetAll() }}
            onToggleTasks={(phase, areChecked) => { checklistStore.toggleTasks(phase, areChecked) }}
          />
        </Tabs>
      </Flex>
    </Flex>
  )
})
