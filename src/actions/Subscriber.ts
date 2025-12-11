"use server"

// LIBRARY
import { logger } from "@/lib/logger"
import {prisma} from "@/lib/prisma"
// TYPES
import { ApiResponse } from "@/types/response"
// UTILS
import { createResponse } from "@/utils/response"
// ZOD
import { CreateSubscriberSchema } from "@/zod/actionsSchema"
import { ZodError } from "zod"

export default async function CreateSubscriber(prevState : ApiResponse<null> | undefined, formData : FormData) : Promise<ApiResponse<null>> {

    try {

        const values = {

            email: formData.get("email")?.toString()
        }

        logger.info("CreateSubscriber: Form verileri alındı.", {values})
        await CreateSubscriberSchema.parseAsync(values)

        // IF USER EXIST
        const isExist = await prisma.subscriber.findFirst({
            where: {
                email: values.email
            }
        })

        if(isExist) {

            logger.error("CreateSubscriber: USER HAS ALREADY SUBSCRIBED!")
            // SHOW TO USER
            return createResponse(false, 409, null, "USER HAS ALREADY SUBSCRIBED!")
        }

        // CREATE SUBSCRIBER
        await prisma.subscriber.create({
            data: {
                email: values.email!,
            }
        })

        logger.info("CreateSubscriber: New subscriber created successfully!")
        return createResponse(true, 201, null, "SUCCESS: CreateSubscriber")
        
    } catch (error) {

        if (error instanceof ZodError) {

            logger.error("CreateSubscriber: INVALID FORM DATA!")
            // SHOW TO USER
            return createResponse(false, 400, null, "INVALID FORM DATA")
        }

        logger.error("CreateSubscriber: FAIL", {error})

        return createResponse(false, 500, null, "SERVER ERROR!")
    }
}