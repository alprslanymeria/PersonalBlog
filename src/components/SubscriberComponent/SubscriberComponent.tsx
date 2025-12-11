"use client"

// REACT & NEXT
import { useActionState } from "react"
// ACTIONS
import CreateSubscriber from "@/actions/Subscriber"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useSubscriberCompReducer } from "@/components/SubscriberComponent/reducer"
import { useSubscriberCompCustomEffect } from "@/components/SubscriberComponent/customEffect"
import { handleInputOnChange } from "@/components/SubscriberComponent/handlers"
// PROVIDERS
import { useAlert } from "@/providers/AlertProvider/AlertProvider"


export default function SubscriberComponent() {

    // ACTION METOT
    const [state, formAction, isPending] = useActionState(CreateSubscriber,undefined)

    // HOOKS
    const {states, dispatch} = useSubscriberCompReducer()
    const {showAlert} = useAlert()

    // USE EFFECT
    useSubscriberCompCustomEffect({
        isPending,
        state,
        email: states.email,
        showAlert,
        dispatch
    })
    

    return (

        <div className="mx-auto bg-white p-6 rounded-lg w-full max-w-sm">
            <form action={formAction} className="space-y-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1">
                        <input
                            name="email"
                            type="email"
                            value={states.email}
                            required
                            className="mt-1 p-2 border border-gray-300 w-full"
                            placeholder="E-mail"
                            onChange={(e) => handleInputOnChange({e, dispatch})}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 md:mt-0 py-2 px-4 bg-[#001489] text-white hover:bg-blue-700 focus:outline-none"
                    >
                        {isPending ? (
                            <div className="flex items-center justify-center">
                                <div className="w-6 h-6 border-4 border-white-500 border-t-transparent rounded-full animate-spin"/>
                            </div>
                        ) : (
                            "JOIN"
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}