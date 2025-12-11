"use client"

// COMPONENTS
import IntroComponent from "@/components/IntroComponent/IntroComponent"
import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent"
// PROVIDERS
import { useLoading } from "@/providers/LoadingProvider/LoadingProvider"
import { useAlert } from "@/providers/AlertProvider/AlertProvider"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { usePortfolioPageReducer } from "@/page/PortfolioPage/reducer"
import { usePortfolioPageCustomEffect } from "@/page/PortfolioPage/customEffect"

export default function PortfolioPage() {

    // HOOKS
    const {isLoading, loadingSource, setLoading} = useLoading()
    const {showAlert} = useAlert()
    const {state, dispatch} = usePortfolioPageReducer()

    // USE EFFECT
    usePortfolioPageCustomEffect({

        setLoading,
        showAlert,
        dispatch
    })


    if(isLoading && loadingSource === "page" ) return (

        <div className="container mx-auto max-w-screen-xl flex items-center justify-center h-screen">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
        </div>

    )
    
    return (

        <div className="container mx-auto max-w-screen-xl bg-[#1F222A]">
            <IntroComponent/>
            <ProjectsComponent projects={state.projects}/>
        </div>

    )
}