import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Login from '../components/Login'
import NavBar from '../components/NavBar'
import Register from '../components/Register'
import DashboardRoutes from './DashboradRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if (user?.uid) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
        setChecking(false)
    })
}, [])

if (checking) {
    return (
      <Spinner animation="border" />
    )
}


  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/login" element={
            <PublicRoute isAuth={isLoggedIn}>
              <Login />
            </PublicRoute>
          } />

          <Route path="/register" element={
            <PublicRoute isAuth={isLoggedIn}>
              <Register />
            </PublicRoute>
          } />

          <Route path="/*" element={
            <PrivateRoute isAuth={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRoute>
          } />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter