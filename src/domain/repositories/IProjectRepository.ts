import { Project } from "../entities/Project"
import { ProjectExt } from "@/types/projectExt"

export type ProjectWithRelations = ProjectExt

export interface IProjectRepository {
  findAll(): Promise<ProjectWithRelations[]>
  findById(id: number): Promise<ProjectWithRelations | null>
}
