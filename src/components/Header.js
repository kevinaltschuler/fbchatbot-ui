import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 24px;
  padding: 12px 24px;

  border-bottom: 1px #222 solid;
  margin-bottom: 24px;
  font-weight: 800;
`;

const Header = () => {
  return (
    <Container data-testid="title-element">Hello welcome to my app</Container>
  );
};

export default Header;
