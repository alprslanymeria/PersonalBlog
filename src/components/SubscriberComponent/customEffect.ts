// REACT & NEXT
import { useEffect } from "react"
// TYPES
import { UseSubscriberCompCustomEffectProps } from "@/components/SubscriberComponent/prop"


export function useSubscriberCompCustomEffect(params: UseSubscriberCompCustomEffectProps) {

    const { isPending, email, state, showAlert, dispatch } = params

    useEffect(() => {

        // BURADA KESE KONTROLÜ YAPMADIK ÇÜNKÜ;
        // 1- EMAIL ZATEN SET EDİLEN OLDUĞU İÇİN
        // 2- ISPENDING KONTROLÜNE GÖRE ZATEN SET İŞLEMİ YAPILIYOR.

        if(!isPending)
        {
            dispatch({type: "SET_EMAIL", payload: {email: email}})
        }

    }, [isPending, email])


    useEffect(() => {

        const kese = [state]

        if(kese.some(k => !k)) return

        switch (state!.status) {
            case 201:
                
                showAlert({type: "success", title: "success",  message: "Subscriber has been created successfully!"})
                break;

            case 409:
                
                showAlert({type: "error", title: "error", message: state!.message})
                break;

            case 400:

                showAlert({type: "error", title: "error", message: state!.message})
                break;

            case 500:

                showAlert({type: "error", title: "error", message: state!.message})
                break;
        
            default:
                break;
        }


    }, [state])
}