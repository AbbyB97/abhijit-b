import { Fade } from '@chakra-ui/react'
import { DissolveProps } from './types'

const ABDissolve = ({ children, dissolveKey, duration = 1 }: DissolveProps) => {
  return (
    <Fade
      transition={{ enter: { duration }, exit: { duration } }}
      unmountOnExit
      key={dissolveKey}
      in
    >
      {children}
    </Fade>
  )
}

export default ABDissolve
