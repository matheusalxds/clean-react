import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from '@/validation/validators/email/email-validation'
import faker from 'faker'

type SutTypes = {
  sut: EmailValidation
}

const makeSut = (word = faker.random.word()): SutTypes => {
  const sut = new EmailValidation(word)

  return {
    sut
  }
}

describe('EmailValidation', () => {
  test('should return error if e-mail invalid', () => {
    const field = faker.random.word()
    const { sut } = makeSut(field)
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toEqual(new InvalidFieldError(field))
  })

  test('should return falsy if e-mail valid', () => {
    const field = faker.random.word()
    const { sut } = makeSut(field)
    const error = sut.validate({ [field]: faker.internet.email() })
    expect(error).toBeFalsy()
  })

  test('should return falsy if e-mail is empty', () => {
    const field = faker.random.word()
    const { sut } = makeSut(field)
    const error = sut.validate({ [field]: '' })
    expect(error).toBeFalsy()
  })
})
