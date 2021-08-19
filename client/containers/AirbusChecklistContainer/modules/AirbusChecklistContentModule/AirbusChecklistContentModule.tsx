import {
  Button,
  Checkbox, Divider, Flex, Heading,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { ChecklistPhase, ChecklistTask, checklistTaskIsSeparator } from '../../../../../models/checklist'

type Props = {
  phase: ChecklistPhase
  nextPhase: ChecklistPhase | null
  onTaskChange: (task: ChecklistTask, isDone: boolean) => void
}

export default observer(({ phase, nextPhase, onTaskChange }: Props) => {
  const areAllTasksDone = phase.tasks.filter(t => !checklistTaskIsSeparator(t)).length === phase.tasks
    .filter(t => !checklistTaskIsSeparator(t) && t.isDone).length
  return (
    <Flex direction="column">
      <Heading size="md" mb={4}>{phase.name} Checklist</Heading>
      <Flex direction="column" mb={8}>
        {phase.tasks.map((task, i) => (
          checklistTaskIsSeparator(task) ? <Divider key={i} my={2} /> : (
            <Checkbox
              key={task.id}
              isChecked={task.isDone}
              onChange={e => onTaskChange(task, e.target.checked)}
              mb={2}
            >{task.name}
            </Checkbox>
          )
        ))}
      </Flex>
      {nextPhase ? (
        <Button
          colorScheme={areAllTasksDone ? 'green' : undefined}
        >Next Phase: {nextPhase.name}
        </Button>
      ) : null}
    </Flex>
  )
})
