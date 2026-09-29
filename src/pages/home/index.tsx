// ================= Library


// ================= Pages
import HomeSection from "./HomeSection"
import ProjectSection from "./ProjectSection"
import ExperienceSection from "./ExperienceSection"
import ServiceSection from "./ServiceSection"
import { SliderServices } from "../../components"

export default function HomePages() {

     return (
          <>
               <HomeSection />
               <SliderServices />
               <ServiceSection />
               <ExperienceSection />
               <ProjectSection />
          </>
     )
}