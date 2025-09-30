import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import NavigationHeader from './navTab/navigationHeader'
import Home from './sections/home.jsx'
import OurProffer from './sections/ourProffer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col'>
      <NavigationHeader />
      <main>
        <Home />
        <OurProffer />
      </main>
    </div>
  )
}

export default App
