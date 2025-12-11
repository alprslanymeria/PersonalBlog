import { z } from "zod"

export const CreateSubscriberSchema = z.object({

  email: z.email("Invalid email address")
                .min(1, "Email is required"),
})

export const GetUniqueCategorySchema = z.object({

  category: z.string().min(1, "Kategori boş olamaz")
  
})

export const GetCommentsByIdSchema = z.object({

  blogId: z.number().int()
  
})

export const MakeCommentSchema = z.object({

  content: z.string()
    .min(1, "Yorum içeriği boş olamaz"),

  blogId: z
    .number()
    .int()
    .refine(val => !isNaN(val), { message: "Blog ID bir sayı olmalıdır" }),

  parentId: z.string().optional(),

  email: z.email("Invalid email address")
                .min(1, "Email is required"),

  userId: z.string()
    .min(1, "Kullanıcı ID gereklidir")
})