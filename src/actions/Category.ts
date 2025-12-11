"use server"

// LIBRARY
import { prisma } from "@/lib/prisma"
import { logger } from "@/lib/logger"
// TYPES
import { GetUniqueCategoryProps, GetUniqueCategoryResponse } from "@/types/actions"
import { ApiResponse } from "@/types/response"
// UTILS
import { createResponse } from "@/utils/response"
// ZOD
import { GetUniqueCategorySchema } from "@/zod/actionsSchema"
import { ZodError } from "zod"


export async function GetUniqueCategory(params: GetUniqueCategoryProps) : Promise<ApiResponse<GetUniqueCategoryResponse>> {

    try {

        await GetUniqueCategorySchema.parseAsync(params)

        const {category} = params

        const uniqueCategory = await prisma.category.findFirst({

            where: {
                name: category
            },
            include: {
                blogPosts: true
            }
        })

        // DO NOT SHOW TO USER
        if(!uniqueCategory) {

            logger.error("GetUniqueCategory: Category not found!")
            return createResponse<GetUniqueCategoryResponse>(false, 404, null, "GetUniqueCategory: Category not found!")
        } 

        logger.info("GetUniqueCategory: uniqueCategory info's fetched successfully!")
        return createResponse(true, 200, {data: uniqueCategory}, "SUCCESS: GetUniqueCategory ")
        
    } catch (error) {

        if (error instanceof ZodError) {
                
            const firstError = error.issues?.[0]?.message
            logger.error("GetUniqueCategory: INVALID FORM DATA!", {firstError})
            // SHOW TO USER
            return createResponse<GetUniqueCategoryResponse>(false, 400, null, firstError)
        }

        logger.error("GetUniqueCategory: FAIL", {error})
        return createResponse<GetUniqueCategoryResponse>(false, 500, null, "SERVER ERROR!")
        
    }

}