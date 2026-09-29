import { Outlet } from "react-router"
import { Navbar,  Footer } from "./components"

export default function Layout() {
     return (
          <div className="flex min-h-screen flex-col">
               <Navbar />
               <main className="flex-1">
                    <Outlet />
               </main>
               <Footer />
          </div>
     )
}