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
    checklistStore.goToPhase(phase)
  }

  const phaseIndex = checklistStore.currentChecklist.phases.findIndex(p => p.name === checklistStore.currentPhase.name)

  return (
    <Flex direction="column" p={4}>
      <Flex align="center" mb={8}>
        <Heading>{checklistStore.currentChecklist.name}</Heading>
        <Spacer />
        <Text fontSize="small">by Sergiu Miclea</Text>
      </Flex>
      <Flex>
        <Tabs
          orientation="vertical"
          index={phaseIndex}
          onChange={idx => { handlePhaseChange(checklistStore.currentChecklist.phases[idx]) }}
          isLazy
        >
          <ChecklistTablist checklist={checklistStore.currentChecklist} />
          <ChecklistPanels
            checklist={checklistStore.currentChecklist}
            nextPhase={checklistStore.nextPhase}
            selectedPhase={checklistStore.currentPhase}
            onNextPhaseClick={() => {
              checklistStore.goToNextPhase()
              window.scrollTo(0, 0)
            }}
            onTaskChange={(task, isChecked) => { checklistStore.toggleTask(task, isChecked) }}
            onResetAll={() => { checklistStore.resetAll() }}
            onToggleTasks={(phase, areChecked) => { checklistStore.togglePhaseTasks(phase, areChecked) }}
          />
        </Tabs>
      </Flex>
    </Flex>
  )
})
