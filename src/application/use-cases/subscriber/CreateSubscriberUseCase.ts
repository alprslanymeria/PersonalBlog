import { ISubscriberRepository } from "@/domain/repositories/ISubscriberRepository"
import { Subscriber } from "@/domain/entities/Subscriber"

export class CreateSubscriberUseCase {
  constructor(private subscriberRepository: ISubscriberRepository) {}

  async execute(email: string): Promise<Subscriber> {
    return await this.subscriberRepository.create(email)
  }
}
