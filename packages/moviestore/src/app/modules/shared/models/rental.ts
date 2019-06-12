import { Stock } from './stock'
export class Rental {
  id: number
  stock?: number
  movie?: number
  initDate: Date
  days: number
  date: Date
  deliveryDate: Date
  price: number
  account: Account
}
