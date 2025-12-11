"use client"

// REACT & NEXT
import Image from "next/image"
// TYPES
import { CapsComponentProps } from "@/components/CapsComponent/prop"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useCapsCompReducer } from "@/components/CapsComponent/reducer"
import { CloseModal, handleImageClick } from "@/components/CapsComponent/handlers"

export default function CapsComponent({capsImages}: CapsComponentProps) {

    // STATES
    const {state, dispatch} = useCapsCompReducer()

    return (

        <>

            {capsImages.length === 0 ? (

                <div className="container mx-auto max-w-screen-xl flex items-center justify-center h-[500]">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
                </div>

            ) : (

                <>
                    <div className="container mx-auto max-w-screen-xl">
                        <div className="p-8 min-h-screen">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                                {capsImages.map((caps) => (

                                    <div
                                        key={caps.id}
                                        className="group relative bg-white rounded-none overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                                        onClick={() => handleImageClick({imageUrl: caps.imageUrl , dispatch})}
                                    >
                                        <Image
                                            src={caps.imageUrl}
                                            alt={`Caps Image ${caps.id}`}
                                            width={500}
                                            height={300}
                                            className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                                    </div> 
                                ))}
                            </div>
                        </div>

                        {state.isOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                                <div className="relative">
                                    <button
                                        onClick={() => CloseModal({dispatch})}
                                        className="absolute top-0 right-0 text-white p-4 text-2xl"
                                    >
                                        &times;
                                    </button>
                                    <Image
                                        src={state.selectedImage}
                                        alt="Selected Image"
                                        width={1200}
                                        height={800}
                                        className="max-w-full max-h-screen object-contain"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                </>
            )
        
            }
        
        </>  
    )
}