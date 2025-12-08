import { ISubscriberRepository } from "@/domain/repositories/ISubscriberRepository"
import { Subscriber } from "@/domain/entities/Subscriber"

export class CreateSubscriberUseCase {
  constructor(private subscriberRepository: ISubscriberRepository) {}

  async execute(email: string): Promise<Subscriber> {
    // Check if email already exists (business rule)
    const existingSubscriber = await this.subscriberRepository.findByEmail(email)
    
    if (existingSubscriber) {
      throw new Error("USER HAS ALREADY SUBSCRIBED!")
    }
    
    return await this.subscriberRepository.create(email)
  }
}
