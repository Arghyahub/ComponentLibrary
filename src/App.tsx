import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import AccordionPage from './pages/accordion-page'
import Testing from './pages/testing'
import AlertModalPage from './pages/alert-modal-page'
import ColorShowcase from './pages/color-test'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/accordion',
    element: <AccordionPage />,
  },
  {
    path: '/alertModal',
    element: <AlertModalPage />,
  },
  {
    path: '/testing',
    element: <Testing />,
  },
  {
    path: '/color-test',
    element: <ColorShowcase />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
