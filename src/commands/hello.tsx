import React from 'react'
import { render } from 'ink'
import { Text, Box } from 'ink'
import chalk from 'chalk'
import ora from 'ora'
import boxen from 'boxen'

interface HelloProps {
  name?: string
}

export const HelloCommand: React.FC<HelloProps> = ({ name = 'World' }) => {
  return (
    <Box padding={1}>
      <Text color="green">
        {chalk.bold(`Hello, ${name}!`)}
      </Text>
    </Box>
  )
}

export const runHelloCommand = (name?: string) => {
  const spinner = ora('Loading...').start()
  
  setTimeout(() => {
    spinner.stop()
    
    console.log(
      boxen(chalk.green(`Hello, ${name || 'World'}!`), {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'green'
      })
    )
  }, 1000)
}