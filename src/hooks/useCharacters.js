import { gql, useLazyQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

const useCharacters = ({ page = 1 }) => {
  const [getCharacters, { error, loading, data }] = useLazyQuery(GET_CHARACTERS, {
    variables: { page },
  });

  return {
    getCharacters,
    error,
    loading,
    data,
  };
};

export default useCharacters;
