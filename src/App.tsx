import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import HomePages from "./pages/home";
import ProjectPages from "./pages/project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/project/:id" element={<ProjectPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
