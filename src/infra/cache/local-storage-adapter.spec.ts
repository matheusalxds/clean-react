import { LocalStorageAdapter } from '@/infra/cache/local-storage-adapter'
import faker from 'faker'
import 'jest-localstorage-mock'
import { AccountModel } from '@/domain/models'

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
    const value = faker.random.objectElement<AccountModel>()
    sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
  })
  test('should call localStorage.getItem with correct value', () => {
    const { sut } = makeSut()
    const key = faker.database.column()
    const value = faker.random.objectElement<AccountModel>()
    const getItemSpy = jest.spyOn(localStorage, 'getItem').mockReturnValueOnce(JSON.stringify(value))
    const obj = sut.get(key)
    expect(obj).toEqual(value)
    expect(getItemSpy).toHaveBeenCalledWith(key)
  })
})
