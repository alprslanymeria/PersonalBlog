"use server"

// LIBRARY
import { logger } from "@/lib/logger"
// TYPES
import { ApiResponse } from "@/types/response"
// UTILS
import { createResponse } from "@/utils/response"
// ZOD
import { CreateSubscriberSchema } from "@/zod/actionsSchema"
import { ZodError } from "zod"
// DI CONTAINER
import { container } from "@/infrastructure/di/container"
import { PrismaSubscriberRepository } from "@/infrastructure/repositories/PrismaSubscriberRepository"
import { prisma } from "@/lib/prisma"

export default async function CreateSubscriber(prevState : ApiResponse<null> | undefined, formData : FormData) : Promise<ApiResponse<null>> {

    try {

        const values = {

            email: formData.get("email")?.toString()
        }

        logger.info("CreateSubscriber: Form verileri alındı.", {values})
        await CreateSubscriberSchema.parseAsync(values)

        // Check if email already exists (business rule)
        const subscriberRepository = new PrismaSubscriberRepository(prisma)
        const isExist = await subscriberRepository.findByEmail(values.email!)

        if(isExist) {
            logger.error("CreateSubscriber: USER HAS ALREADY SUBSCRIBED!")
            return createResponse(false, 409, null, "USER HAS ALREADY SUBSCRIBED!")
        }
        
        const useCase = container.createSubscriberUseCase()
        await useCase.execute(values.email!)
        
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