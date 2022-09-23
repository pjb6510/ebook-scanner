import React from 'react';
import styled from 'styled-components';

interface StateDisplayProps {
  currentPageNumber: string | null;
  totalPageNumber: string | null;
}

const StateDisplayContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export function StateDisplay({
  currentPageNumber,
  totalPageNumber,
}: StateDisplayProps) {
  return (
    <StateDisplayContainer>{`${currentPageNumber} / ${totalPageNumber}`}</StateDisplayContainer>
  );
}
