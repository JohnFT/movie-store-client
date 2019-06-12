import { Person } from './person'
import { Rol } from './rol'

export class Account {
  id: number
  username: string
  password: string
  avatar: string
  state: number
  person: Person
  rol: Rol
}
