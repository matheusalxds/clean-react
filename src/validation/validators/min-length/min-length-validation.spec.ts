import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from '@/validation/validators/min-length/min-length-validation'

import faker from 'faker'

type SutTypes = {
  sut: MinLengthValidation
}

const makeSut = (field: string): SutTypes => {
  const sut = new MinLengthValidation(field, 5)

  return {
    sut
  }
}

describe('MinLengthValidation', () => {
  test('should return error if value is invalid', () => {
    const field = faker.database.column()
    const { sut } = makeSut(field)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(4) })
    expect(error).toEqual(new InvalidFieldError(field))
  })

  test('should return false if value is valid', () => {
    const field = faker.database.column()
    const { sut } = makeSut(field)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(5) })
    expect(error).toBeFalsy()
  })

  test('should return falsy if field does not exist in schema', () => {
    const { sut } = makeSut(faker.database.column())
    const error = sut.validate({ [faker.database.column()]: faker.random.alphaNumeric(5) })
    expect(error).toBeFalsy()
  })
})
