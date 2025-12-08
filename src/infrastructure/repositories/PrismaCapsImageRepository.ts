import { PrismaClient } from "@prisma/client"
import { ICapsImageRepository } from "@/domain/repositories/ICapsImageRepository"
import { CapsImage } from "@/domain/entities/CapsImage"

export class PrismaCapsImageRepository implements ICapsImageRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll(): Promise<CapsImage[]> {
    return await this.prisma.capsImage.findMany()
  }
}
