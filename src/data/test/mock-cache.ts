import { SetStorage } from '@/data/protocols/cache'

/**
 * Stub don't need to capture the values, it uses classes to return some value
 * Spy capture values and mock a value
 * Mock doesn't have returns, only receive values its goal is just storage values
 */

export class SetStorageMock implements SetStorage {
  key: string
  value: any

  set (key: string, value: any): void {
    this.key = key
    this.value = value
  }
}
