import { Route, Router, Routes } from "react-router"
import Header from "./components/Header"
import Layout from "./components/Layout"
import IndexPage from "./components/IndexPage"
import AboutPage from "./components/AboutPage"
import TechStackPage from "./components/TechStackPage"
import ProjectPage from "./components/ProjectPage"
import ContactPage from "./components/ContactPage"
import AchievementsPage from "./components/AchievementsPage"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/techstack' element={<TechStackPage />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/achievements' element={<AchievementsPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
