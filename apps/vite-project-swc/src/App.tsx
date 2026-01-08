import { Button } from '@repo/ui/Button'
import { strings } from '@repo/utils';
import '@repo/styles' // cambiar a index

function App() {
  const saludo = strings.uppercaseFirstLetter('hola');

  return (
    <>
      <Button appName='vite-react' className='bg-yellow-500'>Hola</Button>
      <p>{saludo}</p>
      <div className='card'>h</div>
    </>
  )
}

export default App
