import {
  CharactersContainer,
  FiltersContainer,
  Image,
  InputLabel,
  InputLabelContainer,
} from './style';
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
    scrollToTop();
  }, [page, status, searchText]); // eslint-disable-line

  return (
    <>
      <FiltersContainer>
        <InputLabelContainer>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder='Search characters'
          />
        </InputLabelContainer>

        <InputLabelContainer>
          <InputLabel>Status</InputLabel>
          <select name='status' onChange={(e) => setStatus(e?.target?.value)}>
            <option value=''>All</option>
            {statusList.map((statusOption) => (
              <option selected={status === statusOption} value={statusOption}>
                {statusOption}
              </option>
            ))}
          </select>
        </InputLabelContainer>
      </FiltersContainer>

      <CharactersContainer>
        {loading ? (
          <h2>Loading...</h2>
        ) : !loading && !data?.characters?.results?.length ? (
          <h2>No characters found</h2>
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

      {data?.characters?.info?.pages && (
        <InputLabelContainer>
          <InputLabel>Choose page</InputLabel>
          <select
            name='pages'
            onChange={(e) => setPage(Number(e?.target?.value))}
          >
            {Array.from({ length: data?.characters?.info?.pages }).map(
              (_, i) => (
                <option selected={i + 1 === page} value={i + 1} key={i}>
                  {i + 1}
                </option>
              ),
            )}
          </select>
        </InputLabelContainer>
      )}
    </>
  );
};

export default CharactersList;
