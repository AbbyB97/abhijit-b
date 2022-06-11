import { Fade } from '@chakra-ui/react'
import { DissolveProps } from './types'

const ABDissolve = ({ children, key, duration = 1 }: DissolveProps) => {
  return (
    <Fade
      transition={{ enter: { duration }, exit: { duration } }}
      unmountOnExit
      key={key}
      in
    >
      {children}
    </Fade>
  )
}

export default ABDissolve
