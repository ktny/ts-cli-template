import Conf from 'conf'
import chalk from 'chalk'

interface ConfigSchema {
  name: string
  language: string
  theme: 'light' | 'dark'
  notifications: boolean
  lastUsed: string
}

const schema = {
  name: {
    type: 'string',
    default: 'Anonymous'
  },
  language: {
    type: 'string',
    default: 'TypeScript'
  },
  theme: {
    type: 'string',
    enum: ['light', 'dark'],
    default: 'dark'
  },
  notifications: {
    type: 'boolean',
    default: true
  },
  lastUsed: {
    type: 'string',
    format: 'date-time'
  }
} as const

export const config = new Conf<ConfigSchema>({
  projectName: 'ts-cli-template',
  schema,
  defaults: {
    name: 'Anonymous',
    language: 'TypeScript',
    theme: 'dark',
    notifications: true,
    lastUsed: new Date().toISOString()
  }
})

export const showConfig = () => {
  console.log(chalk.blue('Current Configuration:'))
  console.log(chalk.gray(`Config path: ${config.path}`))
  console.log()
  
  const allConfig = config.store
  Object.entries(allConfig).forEach(([key, value]) => {
    console.log(`${chalk.green(key)}: ${chalk.white(String(value))}`)
  })
}

export const updateConfig = (updates: Partial<ConfigSchema>) => {
  Object.entries(updates).forEach(([key, value]) => {
    config.set(key as keyof ConfigSchema, value)
  })
  
  // Update last used timestamp
  config.set('lastUsed', new Date().toISOString())
  
  console.log(chalk.green('Configuration updated successfully!'))
}

export const resetConfig = () => {
  config.clear()
  console.log(chalk.yellow('Configuration reset to defaults'))
}

export const exportConfig = () => {
  return config.store
}

export const importConfig = (newConfig: Partial<ConfigSchema>) => {
  try {
    Object.entries(newConfig).forEach(([key, value]) => {
      if (key in schema) {
        config.set(key as keyof ConfigSchema, value)
      }
    })
    console.log(chalk.green('Configuration imported successfully!'))
  } catch (error) {
    console.error(chalk.red('Failed to import configuration:'), error)
  }
}