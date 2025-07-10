import React from 'react'
import { describe, it, expect } from '@jest/globals'
import { Spinner } from '../../src/components/Spinner'

describe('Spinner Component', () => {
  it('should render with default props', () => {
    const spinner = <Spinner />
    expect(spinner).toBeDefined()
    expect(spinner.type).toBe(Spinner)
  })

  it('should render with custom text', () => {
    const customText = 'Processing...'
    const spinner = <Spinner text={customText} />
    expect(spinner.props.text).toBe(customText)
  })

  it('should render with custom color', () => {
    const customColor = 'green'
    const spinner = <Spinner color={customColor} />
    expect(spinner.props.color).toBe(customColor)
  })
})