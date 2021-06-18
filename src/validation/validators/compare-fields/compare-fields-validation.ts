import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldError } from '@/validation/errors'

export class CompareFieldsValidation implements FieldValidation {
  constructor (readonly field: string, private readonly valueToCompare: string) {}

  validate (value): Error {
    return new InvalidFieldError(this.field)
  }
}
