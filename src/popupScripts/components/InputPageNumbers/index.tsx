import React from 'react';
import styled from 'styled-components';
import { InputPageNumber } from './InputPageNumber';

const InputPageNumbersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  ${process.env.NODE_ENV === 'development' ? 'border: 1px solid black;' : ''}
`;

interface InputPageNumbersProps {
  inputNumberMax: number;
  inputNumberMin: number;
}

export function InputPageNumbers({
  inputNumberMax,
  inputNumberMin,
}: InputPageNumbersProps) {
  return (
    <InputPageNumbersContainer>
      <InputPageNumber
        max={inputNumberMax}
        min={inputNumberMin}
        labelText="Start"
      />
      <InputPageNumber
        max={inputNumberMax}
        min={inputNumberMin}
        labelText="End"
      />
    </InputPageNumbersContainer>
  );
}
