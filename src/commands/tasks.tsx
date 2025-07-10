import { Listr } from 'listr2'
import { execa } from 'execa'
import chalk from 'chalk'

interface TaskContext {
  results: string[]
}

export const runTasksCommand = async () => {
  const tasks = new Listr<TaskContext>([
    {
      title: 'Initializing project',
      task: async (ctx, task) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        ctx.results = ['Project initialized']
        task.output = 'Project setup complete'
      }
    },
    {
      title: 'Installing dependencies',
      task: async (ctx, task) => {
        await new Promise(resolve => setTimeout(resolve, 1500))
        ctx.results.push('Dependencies installed')
        task.output = 'All dependencies installed successfully'
      }
    },
    {
      title: 'Running tests',
      task: async (ctx, task) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        ctx.results.push('Tests passed')
        task.output = 'All tests passed'
      }
    },
    {
      title: 'Building project',
      task: async (ctx, task) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        ctx.results.push('Build completed')
        task.output = 'Project built successfully'
      }
    }
  ], {
    concurrent: false,
    rendererOptions: {
      showSubtasks: true,
      collapse: false
    }
  })

  try {
    const context = await tasks.run()
    console.log(chalk.green('\n✅ All tasks completed successfully!'))
    console.log(chalk.blue('Results:'))
    context.results.forEach(result => {
      console.log(chalk.gray(`  - ${result}`))
    })
  } catch (error) {
    console.error(chalk.red('❌ Tasks failed:'), error)
  }
}

export const runParallelTasksCommand = async () => {
  const tasks = new Listr([
    {
      title: 'Linting code',
      task: async () => {
        await new Promise(resolve => setTimeout(resolve, 2000))
      }
    },
    {
      title: 'Type checking',
      task: async () => {
        await new Promise(resolve => setTimeout(resolve, 1500))
      }
    },
    {
      title: 'Running unit tests',
      task: async () => {
        await new Promise(resolve => setTimeout(resolve, 3000))
      }
    }
  ], {
    concurrent: true,
    rendererOptions: {
      showSubtasks: true
    }
  })

  try {
    await tasks.run()
    console.log(chalk.green('\n✅ All parallel tasks completed!'))
  } catch (error) {
    console.error(chalk.red('❌ Parallel tasks failed:'), error)
  }
}