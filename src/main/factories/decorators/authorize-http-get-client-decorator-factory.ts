import { HttpGetClient } from '@/data/protocols/http'
import { AuthorizeHttpGetClientDecorator } from '@/main/decorators'
import { makeLocalStorageAdapter } from '@/main/factories/cache'
import { makeAxiosHttpClientAdapter } from '@/main/factories/http'

export const makeAuthorizeHttpGetClientDecoratorFactory = (): HttpGetClient =>
  new AuthorizeHttpGetClientDecorator(makeLocalStorageAdapter(), makeAxiosHttpClientAdapter())
