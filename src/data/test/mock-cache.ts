import { GetStorage } from '@/data/protocols/cache'
import faker from 'faker'

// SPY
// spy something
// return mocked something
export class GetStorageSpy implements GetStorage {
  key: string
  value: any = faker.random.objectElement()

  get (key: string): any {
    this.key = key
    return this.value
  }
}
