import './App.css'

// importação do react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// importação de componentes
import Nav from './components/Nav'

//Importação de pages
import Search from './pages/Search'
import Home from './pages/Home'

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

