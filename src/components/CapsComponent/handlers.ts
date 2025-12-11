// TYPES
import { CloseModalProps, HandleImageClickProps } from "@/components/CapsComponent/prop"

export async function handleImageClick(params: HandleImageClickProps) {

    const {imageUrl, dispatch} = params

    const kese = [imageUrl]

    if(kese.some(k => !k)) return

    dispatch({type: "SET_IS_OPEN", payload: {isOpen: true}})
    dispatch({type: "SET_SELECTED_IMAGE", payload: {selectedImage: imageUrl}})
}


export async function CloseModal(params: CloseModalProps) {

    const {dispatch} = params

    dispatch({type: "SET_IS_OPEN", payload: {isOpen: false}})
    dispatch({type: "SET_SELECTED_IMAGE", payload: {selectedImage: ""}})
}