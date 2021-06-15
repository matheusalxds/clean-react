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
    const word = faker.random.word()
    const { sut } = makeSut(word)
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError(word))
  })

  test('should return falsy if e-mail valid', () => {
    const { sut } = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
