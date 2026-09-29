import { useParams } from "react-router"
import HeroSection from "./HeroSection"
import ProjectOverview from "./ProjectOverview"
import TechStack from "./TechStack"
import ProjectNavigation from "./ProjectNavigation"
import RelatedProjects from "./RelatedProjects"
import { decryptId } from "../../helper"
import { ProjectItem } from "../../constants"
import { useState, useEffect } from "react"

export default function ProjectPages() {
     const { id } = useParams()
     const [projectId, setProjectId] = useState<string | null>(null)

     useEffect(() => {
          if (!id) return

          async function decryptedId() {
               const decryptedId = await decryptId(String(id))
               setProjectId(decryptedId)
          }
          decryptedId()
     }, [id])

     // Tunggu sampai decrypt selesai, supaya semua child tidak menerima NaN
     if (projectId === null) return null

     const numericId = Number(projectId)
     const project = ProjectItem.find((p) => p.id === numericId)

     // Kalau id hasil decrypt tidak cocok dengan data manapun
     if (!project) {
          return (
               <div className="flex min-h-[50vh] items-center justify-center text-gray-400">
                    Project not found.
               </div>
          )
     }

     return (
          // key memaksa remount saat pindah project, jadi state internal
          // (misalnya activeIndex di HeroSection) ikut reset ke awal
          <section key={numericId}>
               <HeroSection id={numericId} />

               <ProjectOverview
                    challenge={project.challenge}
                    solution={project.solution}
                    details={[
                         { label: "Role", value: project.role },
                         { label: "Duration", value: project.duration },
                         { label: "Year", value: project.year },
                         { label: "Client", value: project.client },
                    ]}
               />

               <TechStack stacks={project.techStack} />

               <ProjectNavigation currentId={numericId} />
               <RelatedProjects currentId={numericId} limit={3} />
          </section>
     )
}