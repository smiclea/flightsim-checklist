import { Checkbox, Flex, Box } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { ChecklistPhase, ChecklistTask, checklistTaskIsSeparator } from '../../../../models/checklist'

type Props = {
  tasks: ChecklistPhase['tasks']
  onTaskChange: (task: ChecklistTask, isChecked: boolean) => void
}

export default observer(({ tasks, onTaskChange }: Props) => (
  <Flex direction="column" mb={8}>
    {tasks.map((task, i) => (
      checklistTaskIsSeparator(task) ? <Box height={4} key={i} my={2} /> : (
        <Flex key={task.id}>
          <Checkbox
            key={task.id}
            isChecked={task.isDone}
            onChange={e => onTaskChange(task, e.target.checked)}
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

))
