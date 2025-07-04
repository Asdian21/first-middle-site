import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/MainPage/MainPage'

function App() {

  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    }
   
  ])

  return (
    <div className="App">
      <RouterProvider router={routerConfig} /> 
    </div>
  )
}

export default App
