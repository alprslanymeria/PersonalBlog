import { ICapsImageRepository } from "@/domain/repositories/ICapsImageRepository"
import { CapsImage } from "@/domain/entities/CapsImage"

export class GetAllCapsImagesUseCase {
  constructor(private capsImageRepository: ICapsImageRepository) {}

  async execute(): Promise<CapsImage[]> {
    return await this.capsImageRepository.findAll()
  }
}
