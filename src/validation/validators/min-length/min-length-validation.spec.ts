import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from '@/validation/validators/min-length/min-length-validation'

describe('MinLengthValidation', () => {
  test('should return error if value is invalid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError('min-length'))
  })

  test('should return false if value is valid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate('12356')
    expect(error).toBeFalsy()
  })
})
