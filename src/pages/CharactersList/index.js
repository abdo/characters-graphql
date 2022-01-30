import { Container, Image } from './style';
import { useEffect, useState } from 'react';

import useCharacters from 'hooks/useCharacters';

const CharactersList = () => {
  const [page, setPage] = useState(1);

  const { getCharacters, loading, data } = useCharacters({ page });

  useEffect(() => {
    getCharacters();
  }, [page]); // eslint-disable-line

  return (
    <>
      <Container>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {data?.characters?.results?.map((character) => (
              <div key={character.name}>
                <Image src={character.image} alt='characterimage' />
                <h3>{character.name}</h3>
              </div>
            ))}
          </>
        )}
      </Container>
      <select name='pages' onChange={(e) => setPage(Number(e?.target?.value))} >
        {Array.from({ length: data?.characters?.info?.pages }).map((_, i) => (
          <option selected={i+1===page} value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
    </>
  );
};

export default CharactersList;
