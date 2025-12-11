"use server"

// LIBRARY
import { prisma } from "@/lib/prisma"
import { logger } from "@/lib/logger"
// TYPES
import { GetCapsAllResponse } from "@/types/actions"
import { ApiResponse } from "@/types/response"
// UTILS
import { createResponse } from "@/utils/response"

export default async function GetCapsAll() : Promise<ApiResponse<GetCapsAllResponse>> {

    try {

        const capsImages = await prisma.capsImage.findMany()

        if(capsImages.length === 0) {

            logger.warn("GetCapsAll: Projects length is 0!")
            // DONT SHOW THIS MESSAGE BUT ACTION FOR THIS ISSUE
            return createResponse(true, 404, {data: []}, "NO CAPS IMAGES TO SHOW!")
        }

        logger.info("GetCapsAll: SUCCESS: GetCapsAll")
        return createResponse(true, 200, {data: capsImages}, "SUCCESS: GetCapsAll")
        
    } catch (error) { 

        logger.error("GetCapsAll: FAIL", {error})
        
        return createResponse<GetCapsAllResponse>(false, 500, null, "SERVER ERROR!")
    }
        
}