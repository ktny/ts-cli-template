#!/usr/bin/env node
import { Command } from 'commander'
import chalk from 'chalk'
import { runHelloCommand } from './commands/hello'
import { runInteractiveCommand } from './commands/interactive'
import { runTasksCommand, runParallelTasksCommand } from './commands/tasks'
import { showConfig, updateConfig, resetConfig } from './lib/config'
import { checkForUpdates } from './lib/update-notifier'

// Package info for update notifications
const packageInfo = {
  name: 'ts-cli-template',
  version: '0.1.0'
}

// Check for updates
checkForUpdates(packageInfo)

const program = new Command()

program
  .name('ts-cli-template')
  .description('A modern TypeScript CLI tool template with React Ink')
  .version('0.1.0')

program
  .command('hello')
  .description('Say hello')
  .option('-n, --name <name>', 'Name to greet', 'World')
  .action((options) => {
    runHelloCommand(options.name)
  })

program
  .command('interactive')
  .description('Run interactive prompts')
  .action(async () => {
    try {
      await runInteractiveCommand()
    } catch (error) {
      console.error(chalk.red('Interactive command failed:'), error)
    }
  })

program
  .command('tasks')
  .description('Run example tasks')
  .option('-p, --parallel', 'Run tasks in parallel')
  .action(async (options) => {
    try {
      if (options.parallel) {
        await runParallelTasksCommand()
      } else {
        await runTasksCommand()
      }
    } catch (error) {
      console.error(chalk.red('Tasks command failed:'), error)
    }
  })

program
  .command('config')
  .description('Manage configuration')
  .option('-s, --show', 'Show current configuration')
  .option('-r, --reset', 'Reset configuration to defaults')
  .option('-u, --update <key=value>', 'Update configuration value')
  .action((options) => {
    if (options.show) {
      showConfig()
    } else if (options.reset) {
      resetConfig()
    } else if (options.update) {
      const [key, value] = options.update.split('=')
      if (key && value) {
        updateConfig({ [key]: value })
      } else {
        console.error(chalk.red('Invalid update format. Use: key=value'))
      }
    } else {
      showConfig()
    }
  })

program.parse(process.argv)

// If no command is provided, show help
if (!process.argv.slice(2).length) {
  program.outputHelp()
}
