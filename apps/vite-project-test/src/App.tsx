import { useEffect } from 'react';
import { Button } from '@repo/ui/Button'
import '@repo/styles' // cambiar a index

function App() {
  useEffect(() => {
    document.documentElement.dataset.theme = "light";
  }, []);

  return (
    <>
      <Button appName='vite-react' className='bg-yellow-500'>Hello</Button>
      <p>Hello</p>
    </>
  )
}

export default App