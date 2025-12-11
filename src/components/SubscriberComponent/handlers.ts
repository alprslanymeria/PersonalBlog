// TYPES
import { HandleInputOnChangeProps } from "@/components/SubscriberComponent/prop"

export async function handleInputOnChange(params: HandleInputOnChangeProps) {

    const {e, dispatch} = params

    const kese = [e]

    if(kese.some(k => !k)) return

    dispatch({type: "SET_EMAIL", payload: {email: e.target.value}})
}