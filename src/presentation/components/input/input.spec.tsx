import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Input from './input'
import Context from '@/presentation/contexts/form/form-context'

const makeSut = (): RenderResult => {
  const sut = render(
    <Context.Provider value={{ state: {} }}>
      <Input name="field" />
    </Context.Provider>
  )

  return sut
}

describe('Input Component', () => {
  test('should shoud begin with readOnly', () => {
    const sut = makeSut()
    const input = sut.getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
