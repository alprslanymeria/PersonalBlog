"use client"

// REACT & NEXT
import Image from "next/image"
// COMPONENTS
import LinkComponent from "@/components/LinkComponent/LinkComponent"
// PROVIDERS
import { useLoading } from "@/providers/LoadingProvider/LoadingProvider"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useIntroCompReducer } from "@/components/IntroComponent/reducer"
import { useIntroCompCustomEffect } from "@/components/IntroComponent/customEffect"


export default function IntroComponent() {

    // HOOKS
    const {isLoading, loadingSource, setLoading} = useLoading()
    const {state, dispatch} = useIntroCompReducer()

    // CUSTOM EFFECT
    useIntroCompCustomEffect({
        setLoading,
        dispatch
    })

    if(isLoading && loadingSource === "page" ) return (

        <div className="flex flex-col items-center p-6 space-y-6 md:space-y-12 lg:space-y-16">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
        </div>
    )

    return (

        <div className="flex flex-col items-center p-6 space-y-6 md:space-y-12 lg:space-y-16">
            
            <div className="flex flex-col md:flex-row items-center md:justify-around w-full space-y-6 md:space-y-0 md:space-x-8">
                
                <div className="max-w-lg text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4 text-[#78E2A0]">Hey, It's İdris Alparslan</h1>
                    <p className="text-white mb-6 text-center md:text-justify">
                        .NET Developer, reader and writer
                    </p>
                    <LinkComponent/>
                </div>

                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
                    <Image
                        src="/images/pp.jpg"
                        alt="Profile Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className="text-center md:text-left w-full">
                <h1 className="text-2xl font-bold mb-4 text-[#78E2A0]">Who am I?</h1>
                <p className="text-white mb-6 text-justify">
                    {state.bioText}
                </p>
            </div>
        </div>
    )
}