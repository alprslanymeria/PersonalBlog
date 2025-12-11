"use server"

// LIBRARY
import { logger } from "@/lib/logger"
import { prisma } from "@/lib/prisma"
// ACTIONS
import { GetCommentsByIdProps, GetCommentsByIdResponse } from "@/types/actions"
// TYPES
import { CommentExt } from "@/types/projectExt"
import { ApiResponse } from "@/types/response"
// UTILS
import { createResponse } from "@/utils/response"
// ZOD
import { GetCommentsByIdSchema, MakeCommentSchema } from "@/zod/actionsSchema"
import { ZodError } from "zod"

export async function GetCommentsById(params: GetCommentsByIdProps) : Promise<ApiResponse<GetCommentsByIdResponse>> {

    try {

        await GetCommentsByIdSchema.parseAsync(params)

        const {blogId} = params

        // BLOG POST VAR OLUP OLMADIĞI KONTROL EDİLMEDİ ÇÜNKÜ ÖYLE BİR BLOG YOK İSE
        // ZATEN BURAYA ULAŞAMAZ.

        const allComments = await prisma.comment.findMany({

            where: { 
                blogPostId: blogId 
            },
            include: {
                user: true,
                blogPost: true,
            },
            orderBy: { createdAt: "asc" }
        })

        // HİÇ YORUM YOKSA BİR ŞEY GÖSTERMEYE GEREK YOK

        const buildTree = ( parentId: string | null ) : CommentExt[] => {

            return allComments
                .filter((c) => c.parentId === parentId)
                .map((c) => ({

                    ...c,
                    parent: null,
                    replies: buildTree(c.id)
                }))
        }

        const tree = buildTree(null)

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

        // PARENT CHECK
        if(values.parentId) {

            // FIND PARENT
            const parent = await prisma.comment.findUnique({

                where: {
                    id: values.parentId
                },
                include: {parent: true, user: true}
            })


            if(parent?.parentId) {

                // SHOW TO USER
                logger.error("ONLY ONE LEVEL REPLY SUPPORTING!")
                return createResponse(false, 400, null, "ONLY ONE LEVEL REPLY SUPPORTING!")
            }
        }

        const newComment = await prisma.comment.create({
            data: {

                blogPostId: values.blogId,
                content: values.content!,
                parentId: values.parentId || null,
                userId: values.userId!,
                avatar: values.avatar!
            },
            include: {
                user: true
            }
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

        logger.error("MakeComment: FAIL", {error})
        
        return createResponse(false, 500, null, "SERVER ERROR!")
        
    }
}