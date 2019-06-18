import { Stock } from './stock';

export class Rent {
    id: number
    stockId: Stock
    initDate: Date
    days: number
    date: Date
    deliveryDate: Date
    price: number
    account: Account
}