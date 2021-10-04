import { LocalStorageAdapter } from '@/infra/cache/local-storage-adapter'
import faker from 'faker'
import 'jest-localstorage-mock'

type SutTypes = {
  sut: LocalStorageAdapter
}

const makeSut = (): SutTypes => {
  const sut = new LocalStorageAdapter()

  return {
    sut
  }
}

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('should call localStorage.setItem with correct values', () => {
    const { sut } = makeSut()
    const key = faker.database.column()
    const value = faker.random.objectElement<{}>()
    sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
  })

  test('Should call localStorage.removeItem if value is null', async () => {
    const { sut } = makeSut()
    const key = faker.database.column()
    sut.set(key, undefined)
    expect(localStorage.removeItem).toHaveBeenCalledWith(key)
  })

  test('should call localStorage.getItem with correct value', () => {
    const { sut } = makeSut()
    const key = faker.database.column()
    const value = faker.random.objectElement<{}>()
    const getItemSpy = jest.spyOn(localStorage, 'getItem').mockReturnValueOnce(JSON.stringify(value))
    const obj = sut.get(key)
    expect(obj).toEqual(value)
    expect(getItemSpy).toHaveBeenCalledWith(key)
  })
})
