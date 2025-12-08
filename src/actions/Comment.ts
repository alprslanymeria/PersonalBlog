"use server"

// LIBRARY
import { logger } from "@/lib/logger"
// ACTIONS
import { GetCommentsByIdProps, GetCommentsByIdResponse } from "@/types/actions"
// TYPES
import { ApiResponse } from "@/types/response"
// UTILS
import { createResponse } from "@/utils/response"
// ZOD
import { GetCommentsByIdSchema, MakeCommentSchema } from "@/zod/actionsSchema"
import { ZodError } from "zod"
// DI CONTAINER
import { container } from "@/infrastructure/di/container"

export async function GetCommentsById(params: GetCommentsByIdProps) : Promise<ApiResponse<GetCommentsByIdResponse>> {

    try {

        await GetCommentsByIdSchema.parseAsync(params)

        const {blogId} = params

        const useCase = container.getCommentsByBlogIdUseCase()
        const tree = await useCase.execute(blogId)

        logger.info("GetCommentsById: SUCCESS: GetCommentsById")
        return createResponse(true, 200, {data: tree}, "SUCCESS: GetCommentsById")
        
    } catch (error) {

        if (error instanceof ZodError) {
        
            const firstError = error.issues?.[0]?.message
            logger.error("GetCommentsById: INVALID FORM DATA!", {firstError})
            // SHOW TO USER
            return createResponse<GetCommentsByIdResponse>(false, 400, null, "INVALID BLOG ID")
        }
        
        logger.error("GetCommentsById: FAIL", {error})
                
        return createResponse<GetCommentsByIdResponse>(false, 500, null, "SERVER ERROR!")
    }
}


export async function MakeComment(prevState: ApiResponse<null> | undefined, formData: FormData) : Promise<ApiResponse<null>> {

    try {

        const values = {

            content: formData.get("content")?.toString(),
            blogId: Number(formData.get("blogId")),
            parentId: formData.get("parentId")?.toString(),
            email: formData.get("email")?.toString(),
            userId: formData.get("userId")?.toString(),
            avatar: formData.get("avatar")?.toString()
        }

        logger.info("MakeComment: Form verileri alındı.", {values})
        await MakeCommentSchema.parseAsync(values)

        const useCase = container.createCommentUseCase()
        const newComment = await useCase.execute({
            blogPostId: values.blogId,
            content: values.content!,
            parentId: values.parentId || null,
            userId: values.userId!,
            avatar: values.avatar!
        })

        logger.info("MakeComment: New comment created successfully!", {newComment})
        return createResponse(true, 201, null, "SUCCESS: MakeComment")
        
    } catch (error) {

        if (error instanceof ZodError) {
        
            const firstError = error.issues?.[0]?.message
            logger.error("MakeComment: INVALID FORM DATA!")
            // SHOW TO USER
            return createResponse(false, 400, null, firstError)
        }

        if (error instanceof Error) {
            logger.error("MakeComment: Business rule violation", {message: error.message})
            return createResponse(false, 400, null, error.message)
        }

        logger.error("MakeComment: FAIL", {error})
        
        return createResponse(false, 500, null, "SERVER ERROR!")
        
    }
}