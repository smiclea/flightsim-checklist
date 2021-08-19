import {
  Button,
  CircularProgress, CircularProgressLabel, Flex,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { Checklist, ChecklistPhase } from '../../../../../models/checklist'

type Props = {
  checklist: Checklist
  onPhaseClick: (phase: ChecklistPhase) => void
}

export default observer(({ checklist, onPhaseClick }: Props) => (
  <Flex direction="column">
    {checklist.phases.map(phase => (
      <Flex
        key={phase.name}
        align="center"
        mb={4}
      >
        <Button
          variant="unstyled"
          pl={2}
          pr={2}
          flexGrow={1}
          textAlign="left"
          onClick={() => onPhaseClick(phase)}
        >{phase.name}
        </Button>
        <CircularProgress ml={4} value={40} size="32px">
          <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
      </Flex>
    ))}
  </Flex>
))
