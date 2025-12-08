import { Subscriber } from "../entities/Subscriber"

export interface ISubscriberRepository {
  create(email: string): Promise<Subscriber>
  findByEmail(email: string): Promise<Subscriber | null>
}
