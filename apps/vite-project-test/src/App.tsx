import { useEffect } from 'react';
import { Button } from '@repo/ui/Button'
import { numbers } from '@repo/utils';
import '@repo/styles' // cambiar a index

function App() {
  const total = numbers.addTwoNumbers(2, 3);
  useEffect(() => {
    document.documentElement.dataset.theme = "light";
  }, []);

  return (
    <>
      <Button appName='vite-react' className='bg-yellow-500'>Hello</Button>
      <p>Hello {total}</p>
    </>
  )
}

export default App