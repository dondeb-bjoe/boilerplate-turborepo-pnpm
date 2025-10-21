import { Button } from '@repo/ui/Button'
import './App.css'

function App() {

  return (
    <div className='flex w-full h-screen bg-green-700'>
        <div>
          <p className='text-white font-bold text-xl'>Boilerplate Monorepo</p>
        </div>
        <Button appName='vite-react' className='bg-yellow-500'>Hola</Button>
      </div>
  )
}

export default App
