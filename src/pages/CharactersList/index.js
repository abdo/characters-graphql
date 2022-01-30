import useCharacters from 'hooks/useCharacters';

const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  console.log({ error, loading, data });
  return <div>hi</div>;
};

export default CharactersList;
