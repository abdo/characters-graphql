import styled from 'styled-components';

export const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  font-family: ${({ theme }) => theme.fontFamilies.main}, sans-serif;
`;


export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
