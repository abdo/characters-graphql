import { Container, Layout } from './style';
import { Route, Switch } from 'react-router-dom';

import Character from 'pages/Character';
import CharactersList from 'pages/CharactersList';
import Header from 'components/Header';

function App() {
  return (
    <Layout>
      <Header />
      <Container>
        <Switch>
          <Route strict exact path='/' component={CharactersList} />
          <Route strict exact path='/:id' component={Character} />
        </Switch>
      </Container>
    </Layout>
  );
}

export default App;
