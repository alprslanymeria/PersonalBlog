"use client"

// REACT & NEXT
import { useActionState } from "react"
import Image from "next/image"
// ACTIONS
import { MakeComment } from "@/actions/Comment"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useCommentFormCompReducer } from "@/components/CommentFormComponent/reducer"
import { handleAvatarClick, handleOnChangeClick } from "@/components/CommentFormComponent/handlers"
import { useCommentFormCompCustomEffect } from "@/components/CommentFormComponent/customEffect"
// TYPES
import { CommentFormCompProps } from "@/components/CommentFormComponent/prop"
// LIBRARY
import { authClient } from "@/lib/auth-client"
// PROVIDERS
import { useAlert } from "@/providers/AlertProvider/AlertProvider"
// 3RD PARTY
import { motion } from "framer-motion"
import { SendHorizonal } from "lucide-react"


export default function CommentFormComp({parentId, blogId, dispatchOfCommentComp, onCommentSuccess} : CommentFormCompProps) {

    // ACTION METOT 
    const [state, formAction, isPending] = useActionState(MakeComment, undefined)

    // GET SESSION
    const { data: session , isPending: pending} = authClient.useSession() 
    const userId = session?.user.id
    const email = session?.user.email

    // HOOKS
    const {states, dispatch} = useCommentFormCompReducer()
    const {showAlert} = useAlert()

    // USE EFFECT
    useCommentFormCompCustomEffect({
        state,
        dispatchOfCommentComp,
        showAlert,
        onCommentSuccess,
        dispatch
    })

    const avatars = ["6.jpg", "11.jpg", "12.jpg", "38.jpg", "47.jpg"]


    return (

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-slate-200 bg-slate-100 p-5 space-y-5 rounded-md shadow-sm"
        >
            <form action={formAction} className="space-y-5">

                {/* HIDDEN INPUTS */}
                <input type="hidden" value={parentId} name="parentId" />
                <input type="hidden" value={blogId} name="blogId" />
                <input type="hidden" value={email!} name="email" />
                <input type="hidden" value={userId!} name="userId" />
                <input type="hidden" value={states.selectedAvatar} name="avatar" />

                {/* AVATAR SELECTION */}
                {!parentId && (

                    <div className="flex items-center gap-3 overflow-x-auto pb-1 no-scrollbar border-b border-slate-200 pb-3">

                        {avatars.map((avatar) => (

                            <motion.button
                                key={avatar}
                                type="button"
                                whileTap={{ scale: 0.96 }}
                                onClick={() => handleAvatarClick({ avatar, dispatch })}
                                className={`relative p-[2px] transition ${
                                    states.selectedAvatar === avatar
                                        ? "border-2 border-blue-600"
                                        : "border border-transparent hover:border-slate-300"
                                }`}
                            >
                                <Image
                                    src={`/avatars/${avatar}`}
                                    alt="Avatar"
                                    width={40}
                                    height={40}
                                    className="object-cover rounded-sm"
                                />
                            </motion.button>

                        ))}

                    </div>
                )}

                {/* TEXTAREA */}
                <div className="relative">
                    <textarea
                        value={states.content}
                        name="content"
                        onChange={(e) => handleOnChangeClick({ e, dispatch })}
                        rows={3}
                        className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 focus:border-blue-600 focus:ring-0 focus:outline-none rounded-md transition"
                        placeholder={parentId ? "Yanıtınızı yazın..." : "Yorumunuzu yazın..."}
                    />
                    <div className="absolute bottom-2 right-3 text-xs text-slate-400">
                        {states.content.length}/500
                    </div>
                </div>

                {/* SUBMIT BUTTON */}
                <motion.button
                    type="submit"
                    whileTap={{ scale: 0.97 }}
                    disabled={isPending}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 text-white px-6 py-2 uppercase tracking-wide text-sm font-medium rounded-none hover:bg-blue-700 transition-all disabled:opacity-70"
                >
                {isPending ? (
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : (
                    <>
                    <SendHorizonal className="w-4 h-4" />
                        Gönder
                    </>
                )}
                </motion.button>

            </form>
        </motion.div>
    )
}