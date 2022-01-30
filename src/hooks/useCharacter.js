import { gql, useLazyQuery } from '@apollo/client';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      gender
      episode {
        name
        episode
      }
    }
  }
`;

const useCharacter = ({ id = 1 }) => {
  const [getCharacter, { error, loading, data }] = useLazyQuery(
    GET_CHARACTER,
    {
      variables: { id },
    },
  );

  return {
    getCharacter,
    error,
    loading,
    data,
  };
};

export default useCharacter;
