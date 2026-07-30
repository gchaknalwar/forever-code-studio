import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Story from '../components/sections/Story'
import Team from '../components/sections/Team'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

export default function Home() {
  useEffect(() => {
    document.title = 'Forever Code Studio — Web Development & Design Studio'
  }, [])

  return (
    <main>
      <Hero />
      <Projects />
      <Story />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  )
}
