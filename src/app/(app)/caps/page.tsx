"use client"

// COMPONENTS
import CapsComponent from "@/components/CapsComponent/CapsComponent"
// PROVIDERS
import { useLoading } from "@/providers/LoadingProvider/LoadingProvider"
import { useAlert } from "@/providers/AlertProvider/AlertProvider"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useCapsPageReducer } from "@/page/CapsPage/reducer"
import { useCapsPageCustomEffect } from "@/page/CapsPage/customEffect"


export default function CapsPage() {

    // HOOKS
    const {isLoading, loadingSource, setLoading} = useLoading()
    const {state, dispatch} = useCapsPageReducer()
    const {showAlert} = useAlert()

    // USE EFFECT
    useCapsPageCustomEffect({

        setLoading,
        showAlert,
        dispatch
    })

    if(isLoading && loadingSource === "page") return (

        <div className="container mx-auto max-w-screen-xl flex items-center justify-center h-[500]">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
        </div>
    )

    return (

        <div className="container mx-auto max-w-screen-xl">
            <CapsComponent capsImages={state.capsImages}/>
        </div>
    )
}