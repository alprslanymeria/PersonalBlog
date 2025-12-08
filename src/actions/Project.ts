"use server"

// LIBRARY
import { logger } from "@/lib/logger"
// TYPES
import { GetProjectsAllResponse } from "@/types/actions"
import { ApiResponse } from "@/types/response"
// UTILS
import { createResponse } from "@/utils/response"
// DI CONTAINER
import { container } from "@/infrastructure/di/container"

export default async function GetProjectsAll() : Promise<ApiResponse<GetProjectsAllResponse>> {

    try {
        
        const useCase = container.getAllProjectsUseCase()
        const projects = await useCase.execute()

        if(projects.length === 0) {

            logger.warn("GetProjectsAll: Projects length is 0!")
            // DONT SHOW THIS MESSAGE BUT ACTION FOR THIS ISSUE
            return createResponse(true, 404, {data: []}, "NO PROJECTS TO SHOW!")
        }

        logger.info("GetProjectsAll: SUCCESS: GetProjectsAll")
        return createResponse(true, 200, {data: projects}, "SUCCESS: GetProjectsAll")


    } catch (error) {
        
        logger.error("GetProjectsAll: FAIL", {error})

        return createResponse<GetProjectsAllResponse>(false, 500, null, "SERVER ERROR!")
    }
}