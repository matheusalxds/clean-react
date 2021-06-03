export class UnexpectedError extends Error {
  constructor () {
    super('Alo de errado aconteceu. Tente novamente em breve.')
    this.name = 'UnexpectedError'
  }
}
