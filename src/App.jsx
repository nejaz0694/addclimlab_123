import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Consultancy from './components/Consultancy'
import Courses from './components/Courses'
import Resources from './components/Resources'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Consultancy />
        <Courses />
        <Resources />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
