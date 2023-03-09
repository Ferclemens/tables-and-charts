import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { DataContextProvider } from './context/DataContext.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import DisplayCharts from './components/DisplayCharts'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/stadistics", element: <DisplayCharts/> },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <DataContextProvider>
        <RouterProvider router={router} />
      </DataContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
