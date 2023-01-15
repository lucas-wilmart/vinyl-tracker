import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './routes'
import Catalogue from './screens/Catalogue'
import { StoreProvider } from './stores'
import Wishlist from './screens/Wishlist'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Collection from './screens/Collection'

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <NavBar />
          <Routes>
            <Route path={routes.CATALOGUE} element={<Catalogue />} />
            <Route path={routes.WISHLIST} element={<Wishlist />} />
            <Route path={routes.COLLECTION} element={<Collection />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
      <ToastContainer position="bottom-right" theme="dark" hideProgressBar icon={false} autoClose={1500} />
    </div>
  )
}

export default App
