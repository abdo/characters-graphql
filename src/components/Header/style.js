import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  box-shadow: -2px 2px 23px -11px #abb0bd;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  top: 0;
  user-select: none;
`;

