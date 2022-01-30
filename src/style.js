import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fontFamilies.main}, sans-serif;
`;