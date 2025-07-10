export interface CLIOptions {
  verbose?: boolean
  quiet?: boolean
  config?: string
}

export interface CommandResult {
  success: boolean
  message?: string
  data?: any
}

export interface TaskConfig {
  name: string
  description: string
  concurrent?: boolean
  timeout?: number
}

export interface UserPreferences {
  name: string
  language: string
  theme: 'light' | 'dark'
  notifications: boolean
  lastUsed: string
}

export interface UpdateInfo {
  current: string
  latest: string
  name: string
  type: 'major' | 'minor' | 'patch'
}

export interface InteractivePromptAnswers {
  name: string
  language: string
  confirm: boolean
}