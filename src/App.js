import { Container, Layout } from './style';

import CharactersList from 'pages/CharactersList';
import Header from 'components/Header';

function App() {
  return (
    <Layout>
      <Header/>
      <Container>
        <CharactersList />
      </Container>
    </Layout>
  );
}

export default App;
