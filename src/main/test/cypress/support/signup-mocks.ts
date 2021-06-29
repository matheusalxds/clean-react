import * as Helper from './http-mocks'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(/signup/)
export const mockUnexpectedErrorError = (): void => Helper.mockUnexpectedErrorError(/signup/, 'POST')
