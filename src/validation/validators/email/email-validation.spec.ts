import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from '@/validation/validators/email/email-validation'
import faker from 'faker'

describe('EmailValidation', () => {
  test('should return error if e-mail invalid', () => {
    const word = faker.random.word()
    const sut = new EmailValidation(word)
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError(word))
  })

  test('should return falsy if e-mail valid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
