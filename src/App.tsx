import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import './index.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
