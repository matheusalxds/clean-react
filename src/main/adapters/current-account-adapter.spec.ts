import { LocalStorageAdapter } from '@/infra/cache'
import { mockAccountModel } from '@/presentation/test'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '@/main/adapters'

jest.mock('@/infra/cache/local-storage-adapter')

describe('CurrentAccountAdapter', () => {
  test('should call LocalStorageAdapter.set with correct values', () => {
    const account = mockAccountModel()
    // to spy any LocalStorageAdapter instances
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')
    setCurrentAccountAdapter(account)
    expect(setSpy).toHaveBeenCalledWith('account', account)
  })

  test('should call LocalStorageAdapter.get with correct value', () => {
    const account = mockAccountModel()
    // to spy any LocalStorageAdapter instances
    const getSpy = jest.spyOn(LocalStorageAdapter.prototype, 'get').mockReturnValueOnce(account)
    const result = getCurrentAccountAdapter()
    expect(getSpy).toHaveBeenCalledWith('account')
    expect(result).toEqual(account)
  })
})
