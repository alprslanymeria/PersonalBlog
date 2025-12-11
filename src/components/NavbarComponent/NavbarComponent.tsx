"use client"

// REACT & NEXT
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
// COMPONENTS
import MenuComponent from "@/components/MenuComponent/MenuComponent"

const linkClasses = "text-[#FFC96B] font-bold hover:text-gray-500"

// NAVBAR LINKS
const homePage = (
    <>
        <Link key="philosophy" href="/philosophy" className={linkClasses}>Philosophy</Link>
        <Link key="film" href="/film" className={linkClasses}>Film</Link>
        <Link key="music" href="/music" className={linkClasses}>Music</Link>
        <Link key="software" href="/software" className={linkClasses}>Software</Link>
        <Link key="book" href="/book" className={linkClasses}>Book</Link>
    </>
)

const portfolioPage = <Link key="portfolio" href="/portfolio" className={linkClasses}>PORTFOLIO</Link>

const filmPage = <Link key="film" href="/film" className={linkClasses}>FILM</Link>

const philosophyPage = <Link key="philosophy" href="/philosophy" className={linkClasses}>PHILOSOPHY</Link>

const musicPage = <Link key="music" href="/music" className={linkClasses}>MUSIC</Link>

const softwarePage = <Link key="software" href="/software" className={linkClasses}>SOFTWARE</Link>

const bookPage = <Link key="book" href="/book" className={linkClasses}>BOOK</Link>

const capsPage = <Link key="caps" href="/caps" className={linkClasses}>CAPS</Link>

const travellingPage = <Link key="travelling" href="/travelling" className={linkClasses}>TRAVELLING</Link>


const formatRoute = (path: string) => {
    if (path.startsWith("/philosophy")) return philosophyPage
    if (path.startsWith("/film")) return filmPage
    if (path.startsWith("/music")) return musicPage
    if (path.startsWith("/software")) return softwarePage
    if (path.startsWith("/book")) return bookPage
    if (path.startsWith("/caps")) return capsPage
    if (path.startsWith("/portfolio")) return portfolioPage
    if (path.startsWith("/travelling")) return travellingPage

    switch (path) {
        case "/":
            return homePage
        default:
            return <span></span>
    }
}

// Navbar component
export default function NavbarComponent() {

    const pathname = usePathname() || "/"

    return (
        <div className="container mx-auto max-w-screen-xl flex items-center justify-between py-6 px-4 md:py-8 relative">
            <div className="flex-1 flex justify-center md:justify-start">
                <Link href="/">
                    <Image src={"/images/logo.png"} width={48} height={48} alt="logo" className="object-contain"/>
                </Link>
            </div>

            <nav className="hidden md:flex flex-1 justify-center space-x-12">
                    {formatRoute(pathname)}
            </nav>

            <div className="flex-1 flex justify-center md:justify-end">
                <MenuComponent/>
            </div>
        </div>
    )
}
