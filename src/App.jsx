import { Route, Routes } from 'react-router-dom'
import './App.css'
import Adim from './pages/Adim'
import Home from './pages/Home'
import Login from './pages/Login'
import SingleRoute from './pages/SingleRoute'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className="container max-w-[1610px] mx-auto">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<SingleRoute/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Adim/>} />    
        </Routes>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
