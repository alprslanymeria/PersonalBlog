// TYPES
import { HandlePageChangeProps } from "@/components/BlogComponent/prop"

export async function handlePageChange(params: HandlePageChangeProps) {

    const {value, dispatch} = params

    const kese = [value]

    if(kese.some(k => !k)) return

    dispatch({type: "SET_CURRENT_PAGE", payload: {currentPage: value}})
}