import { Checkbox, Flex, Box } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { ChecklistTask } from '../../../stores/checklistStore'

type Props = {
  tasks: ChecklistTask[]
  onTaskChange: (task: ChecklistTask, isChecked: boolean) => void
}

export default observer(({ tasks, onTaskChange }: Props) => (
  <Flex direction="column" mb={8}>
    {tasks.map(task => (
      task.isSeparator ? <Box height={4} key={task.id} my={2} /> : (
        <Flex key={task.id} alignItems="flex-end">
          <Checkbox
            key={task.id}
            isChecked={task.isDone}
            onChange={e => onTaskChange(task, e.target.checked)}
            py={4}
            size="lg"
          >{task.name}
          </Checkbox>
          <Box
            backgroundImage="linear-gradient(to right, white 33%, rgba(255,255,255,0) 0%)"
            backgroundPosition="bottom"
            backgroundSize="3px 1px"
            backgroundRepeat="repeat-x"
            flexGrow={1}
            height={1}
            mx={4}
            mb={5}
            minW="16px"
          />
          <Flex mb={4}>
            {task.status}
          </Flex>
        </Flex>
      )
    ))}
  </Flex>

))
