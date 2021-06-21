import { RequiredFieldError } from '@/validation/errors'
import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'
import faker from 'faker'

type SutTypes = {
  sut: RequiredFieldValidation
}

const makeSut = (field: string): SutTypes => {
  const sut = new RequiredFieldValidation(field)

  return {
    sut
  }
}

describe('RequiredFieldValidation', () => {
  test('should return error if field is empty', () => {
    const field = faker.database.column()
    const { sut } = makeSut(field)
    const error = sut.validate({ [field]: '' })
    expect(error).toEqual(new RequiredFieldError())
  })

  test('should return false if field is not empty', () => {
    const field = faker.database.column()
    const { sut } = makeSut(field)
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toBeFalsy()
  })
})
