// REACT & NEXT
import type { Metadata } from "next"
// ASSETS
import "@/../public/globals.css"
// PROVIDERS
import { AlertProvider } from "@/providers/AlertProvider/AlertProvider"
import { LoadingProvider } from "@/providers/LoadingProvider/LoadingProvider"
// COMPONENTS
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent"

// METADATA
export const metadata: Metadata = {
  title: "Blog",
  description: "Created by Alparslan",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const bgColor = "#1F222A"

    return (
        <html lang="en">
        <head>
        </head>
        <body style={{backgroundColor: bgColor}}>
            <AlertProvider>
                <LoadingProvider>
                    <>
                    <NavbarComponent/>
                    </>
                    <>
                        {children}
                    </>
                </LoadingProvider>
            </AlertProvider>
        </body>
        </html>
    )
}