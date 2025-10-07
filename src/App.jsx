import NavigationHeader from './navTab/navigationHeader'
import Home from './sections/home.jsx'
import Problematic from './sections/problematic.jsx'
import OurProffer from './sections/ourProffer.jsx'
import AppFunction from './sections/appFunction.jsx'
import FeaturesSection from './sections/featuresSection.jsx'
import IndustriesSection from './sections/industriesSection.jsx'
import ReviewsSimple from './sections/reviewsSimple.jsx'
import FAQ from './sections/faq.jsx'
import Contact from './sections/contact.jsx'
import Footer from './sections/footer.jsx'
// import ReviewsSection from './sections/reviewsSection.jsx'

function App() {
  return (
    <div style={{ 
      width: "100%", 
      minHeight: "100vh",
      background: "#f4f7fb"
    }}>
      <NavigationHeader />
      <main style={{ 
        width: "100%", 
        background: "#f4f7fb",
        paddingTop: "56px" // Compensar el header fijo
      }}>
        <Home />
        <Problematic />
        <OurProffer />
        <AppFunction />
        <FeaturesSection />
        <IndustriesSection />
        <ReviewsSimple />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
