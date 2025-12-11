"use client"

// COMPONENTS
import BioComponent from "@/components/BioComponent/BioComponent"
import SubscriberComponent from "@/components/SubscriberComponent/SubscriberComponent"

export default function HomePage() {
  
  return (

    <div className="container mx-auto max-w-screen-xl">
      <BioComponent/>
      <SubscriberComponent/>
    </div>

  )
}