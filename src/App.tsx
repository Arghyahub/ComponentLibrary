import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import AccordionPage from './pages/accordion-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/accordion',
    element: <AccordionPage />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App