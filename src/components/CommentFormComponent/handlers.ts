// TYPES
import { HandleOnChangeClickProps, HandleAvatarClickProps } from "@/components/CommentFormComponent/prop"

export async function handleOnChangeClick(params: HandleOnChangeClickProps) {

    const {e, dispatch} = params

    const kese = [e]

    if(kese.some(k => !k)) return

    dispatch({type: "SET_CONTENT", payload: {content: e.target.value}})
}

export async function handleAvatarClick(params: HandleAvatarClickProps) {

    const {avatar, dispatch} = params

    const kese = [avatar]

    if(kese.some(k => !k)) return

    dispatch({type: "SET_SELECTED_AVATAR", payload: {selectedAvatar: avatar}})
}