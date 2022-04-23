import {
  Flex, Heading, Spacer, Tabs, Text,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { Aircraft } from '../../../models/Aircraft'
import { ChecklistPhase } from '../../stores/checklistStore'
import useStores from '../../stores/useStores'
import ChecklistPanels from './modules/ChecklistPanels'
import ChecklistTablist from './modules/ChecklistTablist'

export default observer(() => {
  const { checklistStore } = useStores()

  React.useEffect(() => {
    const airplanePath: string = window.location.pathname.substring(1)
    let aircraft: Aircraft = 'a320'
    if (airplanePath === 'b737') {
      aircraft = 'b737'
    }
    checklistStore.loadChecklistFor(aircraft)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePhaseChange = (phase: ChecklistPhase | null) => {
    if (phase) {
      checklistStore.goToPhase(phase)
    }
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
            hasPreviousPhase={checklistStore.previousPhase !== null}
            onPreviousPhaseClick={() => { handlePhaseChange(checklistStore.previousPhase) }}
            checklist={checklistStore.currentChecklist}
            nextPhase={checklistStore.nextPhase}
            selectedPhase={checklistStore.currentPhase}
            onNextPhaseClick={() => {
              checklistStore.goToNextPhase()
              window.scrollTo(0, 0)
            }}
            onTaskChange={(task, isChecked) => { checklistStore.toggleTask(task, isChecked) }}
            onResetAll={() => { checklistStore.resetAll() }}
          />
        </Tabs>
      </Flex>
    </Flex>
  )
})
