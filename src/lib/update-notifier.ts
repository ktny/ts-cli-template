import updateNotifier from 'update-notifier'
import chalk from 'chalk'
import boxen from 'boxen'

interface PackageInfo {
  name: string
  version: string
}

export const checkForUpdates = (pkg: PackageInfo) => {
  const notifier = updateNotifier({
    pkg,
    updateCheckInterval: 1000 * 60 * 60 * 24, // 24 hours
    shouldNotifyInNpmScript: false
  })

  if (notifier.update) {
    const updateMessage = `Update available ${chalk.dim(notifier.update.current)} → ${chalk.green(notifier.update.latest)}
Run ${chalk.cyan(`npm install -g ${notifier.update.name}`)} to update`

    console.log(
      boxen(updateMessage, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'yellow',
        backgroundColor: 'black'
      })
    )
  }

  return notifier
}

export const checkForUpdatesAsync = async (pkg: PackageInfo) => {
  const notifier = updateNotifier({
    pkg,
    updateCheckInterval: 0, // Check immediately
    shouldNotifyInNpmScript: false
  })

  // Force check for updates
  await notifier.fetchInfo()

  if (notifier.update) {
    const updateMessage = `Update available ${chalk.dim(notifier.update.current)} → ${chalk.green(notifier.update.latest)}
Run ${chalk.cyan(`npm install -g ${notifier.update.name}`)} to update`

    console.log(
      boxen(updateMessage, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'yellow',
        backgroundColor: 'black'
      })
    )
    
    return notifier.update
  }

  return null
}

export const showUpdateNotification = (updateInfo: any) => {
  if (!updateInfo) return

  const updateMessage = `New version available: ${chalk.green(updateInfo.latest)}
Current version: ${chalk.dim(updateInfo.current)}
Run ${chalk.cyan(`npm install -g ${updateInfo.name}`)} to update`

  console.log(
    boxen(updateMessage, {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      borderColor: 'green',
      title: '🚀 Update Available',
      titleAlignment: 'center'
    })
  )
}