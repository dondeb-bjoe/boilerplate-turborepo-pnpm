// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Button } from '@repo/ui/Button'
import './App.css'

function App() {

  return (
      <div className='flex w-full h-screen bg-gray-700'>
        <div>
          <p className='text-white font-bold text-xl'>Boilerplate Monorepo</p>
        </div>
        <Button appName='vite-react' className='bg-red-500'>Hola</Button>
      </div>
  )
}

export default App
