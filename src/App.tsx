// ================= Library


// ================= Pages
import HomeSection from "./pages/HomeSection"
import ProjectSection from "./pages/ProjectSection"
import ExperienceSection from "./pages/ExperienceSection"
import Navbar from "./components/Navbar"
import CustomCursor from "./components/CustomCursor"
import ServiceSection from "./pages/ServiceSection"

function App() {

  return (
    <>
      <CustomCursor />
      <Navbar />
      <HomeSection />
      <ServiceSection />
      <ExperienceSection />
      <ProjectSection />

    </>
  )
}

export default App
