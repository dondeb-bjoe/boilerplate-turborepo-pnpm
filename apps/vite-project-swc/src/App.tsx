import { useEffect } from 'react';
import { Button } from '@repo/ui/Button'
import { Card } from '@repo/ui/Card';
import { strings } from '@repo/utils';

const tecnologias = [
  { name: 'PNPM', image: '/src/assets/pnpm.png' },
  { name: 'Turborepo', image: '/src/assets/turborepo.png' },
  { name: 'Typescript', image: '/src/assets/typescript.png' },
  { name: 'Vite', image: '/src/assets/vite.png' },
  { name: 'React', image: '/src/assets/react.svg' },
  { name: 'CSS', image: '/src/assets/css.svg' },
  { name: 'Storybook', image: '/src/assets/storybook.png' },
];

function App() {
  const saludo = strings.uppercaseFirstLetter('hola');
  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
  }, []);

  return (
    <div className='container'>
      <p className="title">Monorepo made with</p>
      <div className='container-cards'>
        {
          tecnologias.map((tech) => (
            <Card key={tech.name} image={tech.image} name={tech.name}></Card>
          ))
        }
      </div>
      <Button appName='vite-react'>Hola {saludo}</Button>
    </div>
  )
}

export default App
