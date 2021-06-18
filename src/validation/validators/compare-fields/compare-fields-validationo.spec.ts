import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'
import { CompareFieldsValidation } from '@/validation/validators/compare-fields/compare-fields-validation'
import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'

type SutTypes = {
  sut: CompareFieldsValidation
}

const makeSut = (field = faker.database.column(), valueToCompare = faker.database.column()): SutTypes => {
  const sut = new CompareFieldsValidation(field, valueToCompare)

  return {
    sut
  }
}

describe('RequiredFieldValidation', () => {
  test('should return error if field is invalid', () => {
    const field = faker.database.column()
    const valueToCompare = faker.database.column()
    const { sut } = makeSut(field, valueToCompare)
    const error = sut.validate(valueToCompare)
    expect(error).toEqual(new InvalidFieldError(field))
  })
})
