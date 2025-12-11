// TYPES
import { HandleShowClickProps } from "@/components/ProjectCardComponent/prop"

export async function handleShowClick(params: HandleShowClickProps) {

    const {state, dispatch} = params

    const kese = [state]

    if(kese.some(k => !k)) return

    dispatch({type: "SET_SHOW_FULL_CONTENT", payload: {showFullContent: !state.showFullContent}})
}