"use client"

// REACT & NEXT
import Image from "next/image"
// COMPONENTS
import LinkComponent from "@/components/LinkComponent/LinkComponent"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useLoading } from "@/providers/LoadingProvider/LoadingProvider"
import { useBioCompReducer } from "@/components/BioComponent/reducer"
import { useBioCompCustomEffect } from "@/components/BioComponent/customEffect"

export default function BioComponent() {

    // HOOKS
    const {isLoading, loadingSource, setLoading} = useLoading()
    const {state, dispatch} = useBioCompReducer()

    // CUSTOM EFFECT
    useBioCompCustomEffect({
        setLoading,
        dispatch
    })

    if(isLoading && loadingSource === "page" ) return (

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-evenly p-6 space-y-6 lg:space-y-0">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
        </div>
    )
    
    return (

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-evenly p-6 space-y-6 lg:space-y-0">

            <div className="max-w-lg text-center md:text-left">

                <h1 className="text-2xl font-bold mb-4">Hoş Geldiniz!</h1>
                
                <p className="text-gray-700 mb-6 text-justify">
                    {state.bioText}
                </p>

                <LinkComponent/>
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
                <Image
                    src="/images/pp.jpg"
                    alt="Profile Image"
                    layout="fill"
                    objectFit="fit"
                    className="shadow-lg"
                />
            </div>
        </div>
    )
}