import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from '@/validation/validators/min-length/min-length-validation'

import faker from 'faker'

type SutTypes = {
  sut: MinLengthValidation
}

const makeSut = (): SutTypes => {
  const sut = new MinLengthValidation(faker.database.column(), 5)

  return {
    sut
  }
}

describe('MinLengthValidation', () => {
  test('should return error if value is invalid', () => {
    const { sut } = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new InvalidFieldError('min-length'))
  })

  test('should return false if value is valid', () => {
    const { sut } = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  })
})
