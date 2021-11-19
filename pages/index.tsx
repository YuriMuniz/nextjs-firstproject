import { Container, Button } from '../styles/pages/Home';
import { useRouter } from 'next/router';
import SEO from '../components/SEO';

export default function Home() {
  const router = useRouter();

  const handleGoPage = (value) => {
    if (value == 'date') {
      router.push('/date');
    } else if ('products') {
      router.push('/products')
    }

  }
  return (
    <Container>
      <SEO
        title="Página Inicial"
        image="icon.jpg"
        shouldExcludeTitleSuffix
      />
      <Button onClick={() => handleGoPage('date')}>Verificar Data</Button>
      <Button onClick={() => handleGoPage('products')}>Página de Produtos</Button>
    </Container>
  )
}
