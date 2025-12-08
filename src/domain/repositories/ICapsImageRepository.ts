import { CapsImage } from "../entities/CapsImage"

export interface ICapsImageRepository {
  findAll(): Promise<CapsImage[]>
}
