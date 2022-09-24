import React from 'react';
import styled from 'styled-components';
import { BookImage } from './BookImage';
import { GlobalStyle } from './GlobalStyle';
import { useBookInfo } from '../hooks/useBookInfo';
import { StateDisplay } from './StateDisplay';
import { InputPageNumbers } from './InputPageNumbers';
import { CaptureButtons } from './CaptureButtons';

const MainAppContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding: 20px
    ${process.env.NODE_ENV === 'development' ? 'border: 1px solid black;' : ''};
`;

function App() {
  const { id, currentPageNumber, totalPageNumber } = useBookInfo();

  return (
    <>
      <GlobalStyle />
      <MainAppContainer>
        <BookImage id={id} />
        <StateDisplay
          currentPageNumber={currentPageNumber}
          totalPageNumber={totalPageNumber}
        />
        <InputPageNumbers
          inputNumberMin={1}
          inputNumberMax={Number(totalPageNumber)}
        />
        <CaptureButtons />
      </MainAppContainer>
    </>
  );
}

export { App };
