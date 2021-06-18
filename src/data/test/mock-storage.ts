import { SetStorage } from '@/data/protocols/cache'

/**
 * Stub don't need to capture the values, it uses classes return some value
 * Spy capture values and mock a value
 * Mock doesn't have returns, only receive values
 */

export class SetStorageMock implements SetStorage {
  key: string
  value: any

  async set (key: string, value: any): Promise<void> {
    this.key = key
    this.value = value
  }
}
