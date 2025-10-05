import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import NavigationHeader from './navTab/navigationHeader'
import Home from './sections/home.jsx'
import Problematic from './sections/problematic.jsx'
import OurProffer from './sections/ourProffer.jsx'
import AppFunction from './sections/appFunction.jsx'
import Footer from './sections/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col'>
      <NavigationHeader />
      <main>
        <Home />
        <Problematic />
        <OurProffer />
        <AppFunction />
        <Footer />
      </main>
    </div>
  )
}

export default App
