import React from 'react';
import styled from 'styled-components';
import { BookImage } from './BookImage';
import { GlobalStyle } from './GlobalStyle';
import { useBookInfo } from '../hooks/useBookInfo';
import { StateDisplay } from './StateDisplay';

const MainAppContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

function App() {
  const { id, page } = useBookInfo();

  return (
    <>
      <GlobalStyle />
      <MainAppContainer>
        <BookImage id={id} />
        <StateDisplay page={page} />
      </MainAppContainer>
    </>
  );
}

export { App };
