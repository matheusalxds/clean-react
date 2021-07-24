import { CompareFieldsValidation } from '@/validation/validators/compare-fields/compare-fields-validation'
import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'

type SutTypes = {
  sut: CompareFieldsValidation
}

const makeSut = (field: string, fieldToCompare: string): SutTypes => {
  const sut = new CompareFieldsValidation(field, fieldToCompare)

  return {
    sut
  }
}

describe('RequiredFieldValidation', () => {
  test('should return error if compare is invalid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const { sut } = makeSut(field, fieldToCompare)
    const error = sut.validate({ [field]: faker.random.words(3), [fieldToCompare]: faker.random.words(4) })
    expect(error).toEqual(new InvalidFieldError(field))
  })

  test('should return error if compare is valid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const value = faker.random.word()
    const { sut } = makeSut(field, fieldToCompare)
    const error = sut.validate({ [field]: value, [fieldToCompare]: value })
    expect(error).toBeFalsy()
  })
})
