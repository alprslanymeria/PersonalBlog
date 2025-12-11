// REACT & NEXT
import { useEffect } from "react"
// TYPES
import { UseCommentFormCompCustomEffectProps } from "@/components/CommentFormComponent/prop"

export function useCommentFormCompCustomEffect(params: UseCommentFormCompCustomEffectProps) {

    const {state, dispatchOfCommentComp, dispatch, onCommentSuccess, showAlert} = params

    useEffect(() => {

        const kese = [state]

        if(kese.some(k => !k)) return

        // CONTENT & REPLY TO DEFAULT
        dispatch({type: "SET_CONTENT", payload: {content: ""}})
        dispatchOfCommentComp({type: "SET_REPLY_TO", payload: {replyTo: ""}})


        switch (state?.status) {
            case 201:

                // FETCH COMMENTS
                onCommentSuccess?.()
                
                showAlert({type: "success", title: "success",  message: "Comment successful!"})
                break;

            case 429:
                
                showAlert({type: "warning", title: "warning",  message: state.message})
                break;

            case 403:
                
                showAlert({type: "error", title: "error",  message: state.message})
                break;

            case 400:
                
                showAlert({type: "error", title: "error",  message: state.message})
                break;

            case 500:

                showAlert({type: "error", title: "error", message: state!.message})
                break;
        
            default:
                break;
        }

    }, [state])
}