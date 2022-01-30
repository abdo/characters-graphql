import { gql, useLazyQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $status: String) {
    characters(page: $page, filter: { status: $status }) {
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

const useCharacters = ({ page = 1, status }) => {
  const [getCharacters, { error, loading, data }] = useLazyQuery(
    GET_CHARACTERS,
    {
      variables: { page, status },
    },
  );

  return {
    getCharacters,
    error,
    loading,
    data,
  };
};

export default useCharacters;
