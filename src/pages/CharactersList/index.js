import { Container } from './style';
import useCharacters from 'hooks/useCharacters';

const CharactersList = () => {
  const { loading, data } = useCharacters();

  return (
    <Container>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        data.characters.results.map((character) => (
          <div key={character.name}>
            <img src={character.image} alt='characterimage' />
            <h3>{character.name}</h3>
          </div>
        ))
      )}
    </Container>
  );
};

export default CharactersList;
