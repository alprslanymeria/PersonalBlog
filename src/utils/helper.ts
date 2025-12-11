// ACTIONS
import { GetCommentsById } from "@/actions/Comment"
// TYPES
import { Action } from "@/components/CommentComponent/prop"
import { ShowAlertProps } from "@/providers/AlertProvider/prop"
import { setLoadingProps } from "@/providers/LoadingProvider/prop"

export function toTitleCase(str: string) {

    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}


interface FetchCommentsParams {
    
  blogId: number
  setLoading: (props: setLoadingProps) => void
  showAlert: (props: ShowAlertProps) => void
  dispatch: React.Dispatch<Action>
}


// FETCH COMMENTS
export async function fetchComments(params: FetchCommentsParams) {

    const {blogId, setLoading, showAlert, dispatch} = params

    try {
    
        const response = await GetCommentsById({blogId})

        if(response && response.success === false){
            
            showAlert({type: "error" , title: "error" , message: response.message})

            return
        }

        if(response.data !== null)

        dispatch({type: "SET_COMMENTS", payload: {comments: response.data.data}})
        
    } catch (error) {
        
        showAlert({type: "error" , title: "error" , message: "Unexpected error during GetCommentsById!"})

    } finally {

        setLoading({value: false})
    }
}