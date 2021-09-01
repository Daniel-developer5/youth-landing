import { FC } from 'react'

import Header from './components/Header'
import AboutUs from './components/AboutUs'

import './App.scss'

const App: FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <AboutUs />
    </div>
  )
}

export default App
