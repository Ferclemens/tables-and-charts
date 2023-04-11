import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { DataContextProvider } from './context/DataContext.jsx'
import { RouterProvider } from "react-router-dom";
import router from './routes/router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <DataContextProvider>
        <RouterProvider router={router} />
      </DataContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
