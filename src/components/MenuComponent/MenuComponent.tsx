"use client"

// REACT & NEXT
import Link from "next/link"
// ICONS
import MenuIcon from "@/../public/icons/menuIcon"
import XmarkIcon from "@/../public/icons/xmarkIcon"
// LIBRARY
import { authClient, SignOut } from "@/lib/auth-client"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useMenuCompReducer } from "@/components/MenuComponent/reducer"
import { handleIconClick } from "@/components/MenuComponent/handlers"


export default function MenuComponent() {

    // GET BASE URL
    const BASE = process.env.NEXT_PUBLIC_BASE_URL || "/"

    const linkClasses = "block hover:bg-gray-800 rounded-md px-3 py-2 transition"

    // SESSION
    const { data: session , isPending} = authClient.useSession() 
    const email = session?.user.email

    // HOOKS
    const {state, dispatch} = useMenuCompReducer()


    return (

        <div className="relative z-50">

            <button
                onClick={() => handleIconClick({dispatch})}
                className="p-2"
            >
                {state.isOpen ? (
                    <XmarkIcon/>
                ) : (
                    <MenuIcon/>
                )}

            </button>

            {/* MENU */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-xl transform ${
                state.isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out flex flex-col p-5`}
            >

                {email && !isPending && (

                    <div className="bg-gray-800 p-4 rounded-xl mb-6 shadow-inner">
                        <p className="text-[#F4CC15] text-md font-semibold truncate text-center">{email}</p>
                    </div>
                )}

                <nav className="flex-grow">
                    <ul className="space-y-4 text-left text-white text-sm font-medium">
                        <li>
                            <Link href={`${BASE}/portfolio`} className={linkClasses}>Portfolio</Link>
                        </li>
                        <li>
                            <Link href={`${BASE}/caps`} className={linkClasses}>Caps</Link>
                        </li>
                        <li>
                            <Link href={`${BASE}/philosophy`} className={linkClasses}>Philosophy</Link>
                        </li>
                        <li>
                            <Link href={`${BASE}/film`} className={linkClasses}>Film</Link>
                        </li>
                        <li>
                            <Link href={`${BASE}/music`} className={linkClasses}>Music</Link>
                        </li>
                        <li>
                            <Link href={`${BASE}/software`} className={linkClasses}>Software</Link>
                        </li>
                        <li>
                            <Link href={`${BASE}/book`} className={linkClasses}>Book</Link>
                        </li>
                        <li>
                            <Link href={`${BASE}/travelling`} className={linkClasses}>Travelling</Link>
                        </li>
                    </ul>
                </nav>

                {email && !isPending && (

                    <button
                        onClick={async () => await SignOut()} 
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 mt-6 rounded-lg transition"
                    >
                        Logout
                    </button>
                )}

            </div>

        </div>
    )
}