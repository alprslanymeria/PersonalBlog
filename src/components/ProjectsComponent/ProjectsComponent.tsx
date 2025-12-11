"use client"

// COMPONENTS
import ProjectCardComponent from "@/components/ProjectCardComponent/ProjectCardComponent"
// TYPES
import { ProjectsComponentProps } from "@/components/ProjectsComponent/prop"
// 3RD PARTY
import { FolderOpen } from "lucide-react"
import { motion } from "framer-motion"


export default function ProjectsComponent({projects}: ProjectsComponentProps) {

    return (

        <section className="py-12">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#78E2A0]">Projelerim</h2>

            {projects.length === 0 ? (

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center text-gray-500 mt-16"
                    >
                    <FolderOpen className="w-16 h-16 mb-4 text-gray-400" />
                    <p className="text-lg font-medium">Henüz burada proje yok gibi görünüyor 🤔</p>
                    <p className="text-sm text-gray-400 mt-1">
                        Ama merak etme, yakında harika şeyler eklenecek 🚀
                    </p>
                </motion.div>

            ) : (

                <div className="space-y-8">

                    {projects.map((project) => (

                        <ProjectCardComponent key={project.id} project={project}/>

                    ))}

                </div>

            )}
            
        </section>
    )
}