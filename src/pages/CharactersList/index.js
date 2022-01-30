import { CharactersContainer, Image } from './style';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import scrollToTop from 'helpers/scrollToTop';
import useCharacters from 'hooks/useCharacters';

const statusList = ['Alive', 'Dead', 'unknown'];

const CharactersList = () => {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [status, setStatus] = useState(null);

  const { getCharacters, loading, data } = useCharacters({
    page,
    status,
    searchText,
  });

  useEffect(() => {
    getCharacters();
  }, [page, status, searchText]); // eslint-disable-line

  return (
    <>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder='Search characters'
      />
      <select name='status' onChange={(e) => setStatus(e?.target?.value)}>
        <option value=''>All</option>
        {statusList.map((statusOption) => (
          <option selected={status === statusOption} value={statusOption}>
            {statusOption}
          </option>
        ))}
      </select>
      <CharactersContainer>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {data?.characters?.results
              ?.filter((c) =>
                statusList.includes(status) ? c.status === status : true,
              )
              ?.map((character) => (
                <Link
                  to={`/${character.id}`}
                  onClick={scrollToTop}
                  key={character.id}
                >
                  <Image src={character.image} alt='characterimage' />
                  <h3>{character.name}</h3>
                </Link>
              ))}
          </>
        )}
      </CharactersContainer>
      <select name='pages' onChange={(e) => setPage(Number(e?.target?.value))}>
        {Array.from({ length: data?.characters?.info?.pages }).map((_, i) => (
          <option selected={i + 1 === page} value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
    </>
  );
};

export default CharactersList;
