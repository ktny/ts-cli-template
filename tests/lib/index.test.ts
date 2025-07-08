import { describe, it, expect } from '@jest/globals'
import { hello } from '../../src/index'

describe('hello function', () => {
  it('should return greeting with name', () => {
    expect(hello('World')).toBe('Hello, World!')
  })

  it('should handle empty string', () => {
    expect(hello('')).toBe('Hello, !')
  })

  it('should handle special characters', () => {
    expect(hello('TypeScript')).toBe('Hello, TypeScript!')
  })
})
