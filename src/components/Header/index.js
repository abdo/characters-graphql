import { Container } from './style';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  const onClickHeader = () => {
    history.push('/');
  };

  return (
    <Container>
      <h1 onClick={onClickHeader}>All about Rick & Morty</h1>
    </Container>
  );
};

export default Header;
