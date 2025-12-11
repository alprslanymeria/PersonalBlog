// TYPES
import { HandleReplyClickProps } from "@/components/CommentComponent/prop"

export function handleReplyClick(params: HandleReplyClickProps) {

    const {commentId, state, dispatch} = params

    // COMMENT I BURADA KESE İÇİNE EKLENMEDİ ÇÜNKÜ "" DURUMU CHECK EDİLİYOR.
    const kese = [state]

    if(kese.some(k => !k)) return

    dispatch({type: "SET_REPLY_TO", payload: {replyTo: state.replyTo === commentId ? "" : commentId}})
}