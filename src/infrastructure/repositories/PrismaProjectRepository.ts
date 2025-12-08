import { PrismaClient } from "@prisma/client"
import { IProjectRepository, ProjectWithRelations } from "@/domain/repositories/IProjectRepository"

export class PrismaProjectRepository implements IProjectRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll(): Promise<ProjectWithRelations[]> {
    return await this.prisma.project.findMany({
      include: {
        ProjectImages: true,
        ProjectLinks: true,
        ProjectTechnologies: {
          include: {
            technology: true
          }
        }
      }
    })
  }

  async findById(id: number): Promise<ProjectWithRelations | null> {
    return await this.prisma.project.findUnique({
      where: { id },
      include: {
        ProjectImages: true,
        ProjectLinks: true,
        ProjectTechnologies: {
          include: {
            technology: true
          }
        }
      }
    })
  }
}
