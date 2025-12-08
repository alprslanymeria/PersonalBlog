"use server"

// TYPES
import { GetAllBlogPostsResponse } from "@/types/actions"
import { ApiResponse } from "@/types/response"
// LIBRARY
import { logger } from "@/lib/logger"
// UTILS
import { createResponse } from "@/utils/response"
// DI CONTAINER
import { container } from "@/infrastructure/di/container"


export async function GetAllBlogPosts() : Promise<ApiResponse<GetAllBlogPostsResponse>> {

    try {

        const useCase = container.getAllBlogPostsUseCase()
        const blogPosts = await useCase.execute()

        if(blogPosts.length === 0) {

            logger.warn("GetAllBlogPosts: BlogPosts length is 0!")
            // DONT SHOW THIS MESSAGE BUT ACTION FOR THIS ISSUE
            return createResponse(true, 404, {data: []}, "NO BLOG POST TO SHOW!")
        }

        logger.info("GetAllBlogPosts: SUCCESS: GetAllBlogPosts")
        return createResponse(true, 200, {data: blogPosts}, "SUCCESS: GetAllBlogPosts")
        
    } catch (error) {
        
        logger.error("GetAllBlogPosts: FAIL", {error})
                
        return createResponse<GetAllBlogPostsResponse>(false, 500, null, "SERVER ERROR!")
    }

}