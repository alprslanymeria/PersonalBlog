"use client"

// REACT & NEXT
import Link from "next/link"
// ICONS
import WhatsappIcon from "@/../public/icons/whatsappIcon"
import FacebookIcon from "@/../public/icons/facebookIcon"
import TwitterIcon from "@/../public/icons/twitterIcon"

export default function ShareComponent() {

    return (

        <div className="flex space-x-4 mt-4 mb-8 px-6 justify-center">
        
            <Link
             
                href={`https://wa.me/`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <WhatsappIcon color="gray" />
            </Link>

            <Link
                href={`https://www.facebook.com`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FacebookIcon color="gray" />
            </Link>

            <Link
                href={`https://twitter.com/`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <TwitterIcon color="gray" />
            </Link>
            
        </div>
    )
}