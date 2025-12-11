// REACT & NEXT
import { useEffect } from "react"
// TYPES
import { UseCommentCompCustomEffectProps } from "@/components/CommentComponent/prop"
// UTILS
import { fetchComments } from "@/utils/helper"

export function useCommentComponentCustomEffect(params: UseCommentCompCustomEffectProps) {

    const {blogId, setLoading, showAlert, dispatch} = params

    useEffect(() => {

        const kese = [blogId]

        if(kese.some(k => !k)) return

        fetchComments({blogId, setLoading, showAlert, dispatch})

    }, [blogId])
}