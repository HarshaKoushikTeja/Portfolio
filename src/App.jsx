import Navbar from './components/Navbar'
import GlobalCanvas from './components/GlobalCanvas'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import BeyondCode from './components/BeyondCode'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import './index.css'

export default function App() {
  if (window.location.pathname !== '/') {
    return (
      <>
        <GlobalCanvas />
        <Navbar />
        <main>
          <NotFound />
        </main>
      </>
    );
  }

  return (
    <>
      <GlobalCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <BeyondCode />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
