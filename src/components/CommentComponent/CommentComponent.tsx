"use client"

// REACT & NEXT
import Image from "next/image"
// PROVIDERS
import { useAlert } from "@/providers/AlertProvider/AlertProvider"
import { useLoading } from "@/providers/LoadingProvider/LoadingProvider"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useCommentCompReducer } from "@/components/CommentComponent/reducer"
import { useCommentComponentCustomEffect } from "@/components/CommentComponent/customEffect"
import { handleReplyClick } from "@/components/CommentComponent/handlers"
// LIBRARY
import { authClient, SignIn } from "@/lib/auth-client"
// COMPONENTS
import CommentForm from "@/components/CommentFormComponent/CommentForm"
// ICONS
import { MessageSquare } from "lucide-react"
import { GoogleLogo } from "@/../public/icons/googleSvg"
// UTILS
import { fetchComments } from "@/utils/helper"


export default function CommentComponent({blogId} : {blogId: number}) {

    // HOOKS
    const {state, dispatch} = useCommentCompReducer()
    const {isLoading, setLoading, loadingSource} = useLoading()
    const {showAlert} = useAlert()

    // SESSION
    const {data: session} = authClient.useSession() 
    const user = session?.user

    // CUSTOM EFFECT
    useCommentComponentCustomEffect({

        blogId,
        setLoading,
        showAlert,
        dispatch
    })


    if(isLoading && loadingSource === "page") return (

        <div className="space-y-4 mt-4 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
        </div>
    )

    return (
            

        <div className="space-y-4 mt-4 mb-4 bg-slate-50 p-4 rounded-md">

            {user ? 
            
            <>
                {/* COMMENT FORM */}
                <CommentForm
                    blogId={blogId}
                    onCommentSuccess={() => fetchComments({ blogId, setLoading, showAlert, dispatch }) }
                    dispatchOfCommentComp={dispatch}
                />

                {/* COMMENTS */}
                {state.comments.map((c) => (
                    <div
                        key={c.id}
                        className="p-3 border border-slate-200 bg-slate-100 rounded-md shadow-sm transition hover:border-slate-400"
                    >
                        <div className="flex items-start gap-2">
                            <Image
                                width={40}
                                height={40}
                                src={`/avatars/${c.avatar || "default.jpeg"}`}
                                alt=""
                                className="w-8 h-8 object-cover rounded-sm border border-slate-300"
                            />
                            <div className="flex-1 text-sm">
                                <p className="font-medium text-neutral-900">{c.user.name}</p>
                                <p className="text-neutral-700 mt-0.5 leading-snug">{c.content}</p>

                                {/* REPLY BUTTON */}
                                <button
                                    onClick={() => handleReplyClick({ commentId: c.id, state, dispatch }) }
                                    className="mt-1 text-xs text-blue-600 hover:bg-blue-50 border border-transparent px-2 py-[2px] transition"
                                >
                                    {state.replyTo === c.id ? "Vazgeç" : "Yanıtla"}
                                </button>

                                {/* REPLY FORM */}
                                {state.replyTo === c.id && (

                                    <div className="mt-2 ml-6">
                                        <CommentForm
                                            blogId={blogId}
                                            parentId={c.id}
                                            onCommentSuccess={() => fetchComments({ blogId, setLoading, showAlert, dispatch }) }
                                            dispatchOfCommentComp={dispatch}
                                        />
                                    </div>
                                )}

                                {/* REPLIES */}
                                {c.replies?.length > 0 && (

                                    <div className="mt-3 ml-5 border-l border-slate-300 pl-3 space-y-2">
                                        {c.replies.map((r) => (
                                            <div
                                                key={r.id}
                                                className="border border-slate-200 bg-slate-50 rounded-md p-2"
                                            >
                                                <p className="text-xs font-medium text-neutral-900">
                                                    {r.user.name}
                                                </p>
                                                <p className="text-xs text-neutral-700">
                                                    {r.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                </>
            
            : 


                <div className="mt-10 max-w-md mx-auto overflow-hidden">
                    {/* Üst Şerit */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-20 flex items-center justify-center">
                        <MessageSquare className="w-10 h-10 text-white animate-bounce" />
                    </div>

                    {/* İçerik */}
                    <div className="p-6 text-center space-y-4">

                        <button
                            type="button"
                            onClick={async () => await SignIn()}
                            className="flex items-center justify-center gap-3 w-full px-5 py-3 text-sm font-medium text-[#3c4043] bg-white border border-[#dadce0] rounded-lg shadow-sm hover:shadow-md hover:bg-[#f8f9fa] transition-all duration-200"
                        >
                            <GoogleLogo className="w-5 h-5" />
                            Google ile giriş yap
                        </button>
                    </div>
                </div>
            }
            
        </div>
    )
}