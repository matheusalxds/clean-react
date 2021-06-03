import { RemoteAuthentication } from './remote-authentication'
import { HttpClientPostSpy } from '../../test/mock-http-client'

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct URL ', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpClientPostSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
