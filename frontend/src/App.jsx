import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Collections from './pages/Collections/Collections'
import Home from './pages/Home/Home'
import Layout from './layout'
import Login from './pages/Login/Login'
import { ThemeProvider } from './components/themeprovider'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collections" element={<Collections />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Route>
      <Route path="/login" element={<Login />} />
    </>
  )
)
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
