import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializePrefetch } from './servicelibs/tanstackInitializer'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './index.css'


const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

async function initializeApp() {
  await initializePrefetch()

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

initializeApp()
