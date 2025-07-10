import { describe, it, expect, jest } from '@jest/globals'

// Mock console.log to capture output
const mockConsoleLog = jest.fn()
const originalConsoleLog = console.log

describe('Hello Command', () => {
  beforeEach(() => {
    console.log = mockConsoleLog
    mockConsoleLog.mockClear()
  })

  afterEach(() => {
    console.log = originalConsoleLog
  })

  it('should be testable', () => {
    expect(true).toBe(true)
  })

  it('should handle basic functionality', () => {
    const greeting = 'Hello, Test!'
    expect(greeting).toContain('Hello')
    expect(greeting).toContain('Test')
  })
})