import { IProjectRepository, ProjectWithRelations } from "@/domain/repositories/IProjectRepository"

export class GetAllProjectsUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(): Promise<ProjectWithRelations[]> {
    return await this.projectRepository.findAll()
  }
}
