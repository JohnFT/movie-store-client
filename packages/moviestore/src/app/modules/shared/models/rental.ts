import { Stock } from './stock'
export class Rental {
  id: number
  stockId?: number
  movie?: number
  initDate: Date
  days: number
  date: Date
  deliveryDate: Date
  price: number
  account: Account
}
