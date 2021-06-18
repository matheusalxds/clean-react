import { Authentication, SaveAccessToken } from '@/domain/usecases'
import { LocalSaveAccessToken } from '@/data/usecases/save-access-token/local-save-access-token'
import { SetStorage } from '@/data/protocols/cache'
import { LocalStorageAdapter } from '@/infra/cache/local-storage-adapter'

export const makeLocalStorageAdapter = (): SetStorage => {
  return new LocalStorageAdapter()
}
