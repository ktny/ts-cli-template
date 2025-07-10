import React, { useState, useEffect } from 'react'
import { Text, Box } from 'ink'
import inquirer from 'inquirer'
import chalk from 'chalk'
import { execa } from 'execa'

interface InteractiveProps {
  onComplete?: (result: any) => void
}

export const InteractiveCommand: React.FC<InteractiveProps> = ({ onComplete }) => {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const runInteractive = async () => {
      try {
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            default: 'Anonymous'
          },
          {
            type: 'list',
            name: 'language',
            message: 'What is your favorite programming language?',
            choices: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust']
          },
          {
            type: 'confirm',
            name: 'confirm',
            message: 'Do you want to save this information?',
            default: true
          }
        ])

        setResult(answers)
        setLoading(false)
        onComplete?.(answers)
      } catch (error) {
        setLoading(false)
        console.error('Error during interactive prompt:', error)
      }
    }

    runInteractive()
  }, [onComplete])

  if (loading) {
    return (
      <Box padding={1}>
        <Text color="yellow">Running interactive prompt...</Text>
      </Box>
    )
  }

  if (!result) {
    return (
      <Box padding={1}>
        <Text color="red">Interactive prompt was cancelled or failed.</Text>
      </Box>
    )
  }

  return (
    <Box flexDirection="column" padding={1}>
      <Text color="green">{chalk.bold('Interactive Results:')}</Text>
      <Text>Name: {result.name}</Text>
      <Text>Language: {result.language}</Text>
      <Text>Confirmed: {result.confirm ? 'Yes' : 'No'}</Text>
    </Box>
  )
}

export const runInteractiveCommand = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      default: 'Anonymous'
    },
    {
      type: 'list',
      name: 'language',
      message: 'What is your favorite programming language?',
      choices: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust']
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Do you want to save this information?',
      default: true
    }
  ])

  console.log(chalk.green('\n--- Results ---'))
  console.log(`Name: ${answers.name}`)
  console.log(`Language: ${answers.language}`)
  console.log(`Confirmed: ${answers.confirm ? 'Yes' : 'No'}`)

  return answers
}