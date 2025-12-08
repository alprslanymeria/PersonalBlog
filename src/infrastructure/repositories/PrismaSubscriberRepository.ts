import { PrismaClient } from "@prisma/client"
import { ISubscriberRepository } from "@/domain/repositories/ISubscriberRepository"
import { Subscriber } from "@/domain/entities/Subscriber"

export class PrismaSubscriberRepository implements ISubscriberRepository {
  constructor(private prisma: PrismaClient) {}

  async create(email: string): Promise<Subscriber> {
    return await this.prisma.subscriber.create({
      data: { email }
    })
  }

  async findByEmail(email: string): Promise<Subscriber | null> {
    return await this.prisma.subscriber.findUnique({
      where: { email }
    })
  }
}
