import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './sections/home.jsx'
import NavigationHeader from './navTab/navigationHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col'>
      <NavigationHeader />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
