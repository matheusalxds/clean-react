import { HttpPostClient, HttpPostParams } from '../protocols/http/http-post-client'

export class HttpClientPostSpy implements HttpPostClient {
  url?: string
  body?: object

  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}
