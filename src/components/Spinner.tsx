import React from 'react'
import { Text } from 'ink'

interface SpinnerProps {
  text?: string
  color?: 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white'
}

export const Spinner: React.FC<SpinnerProps> = ({ text = 'Loading...', color = 'blue' }) => {
  return (
    <Text color={color}>
      ⠋ {text}
    </Text>
  )
}

export default Spinner