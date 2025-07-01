import SignIn from "./pages/SignIn"
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </main>
  )
}

export default App
