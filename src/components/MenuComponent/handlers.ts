// TYPES
import { HandleIconClickProps } from "@/components/MenuComponent/prop"

export async function handleIconClick(params: HandleIconClickProps) {

    const {dispatch} = params

    dispatch({type: "TOGGLE_MENU"})
}