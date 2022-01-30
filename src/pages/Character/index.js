import { Container } from './style';
import useCharacter from 'hooks/useCharacter';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Character = () => {
  const { id } = useParams();

  const { getCharacter, loading, data } = useCharacter({
    id,
  });

  useEffect(() => {
    getCharacter();
  }, []); // eslint-disable-line

  return (
    <Container>
      {loading ? (
        <h2>Loading...</h2>
      ) : !loading && !data?.character?.id ? (
        <h2>No character found</h2>
      ) : (
        <div>
          <img src={data?.character?.image} alt='character' />
          <h3>{data?.character?.name}</h3>
          <h3>
            Gender:{' '}
            {data?.character?.gender?.toLowerCase() === 'male' ? (
              <span role='img' aria-label='male' title='male'>
                👨
              </span>
            ) : (
              <span role='img' aria-label='female' title='female'>
                👩
              </span>
            )}
          </h3>

          <h3>Episodes:</h3>
          {data?.character?.episode.map((episode) => (
            <div>
              {episode.name} <b>({episode.episode})</b>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Character;
