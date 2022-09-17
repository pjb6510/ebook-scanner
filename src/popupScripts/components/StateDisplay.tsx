import React from 'react';
import styled from 'styled-components';

interface StateDisplayProps {
  page: string | null;
}

const StateDisplayContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export function StateDisplay({ page }: StateDisplayProps) {
  return <StateDisplayContainer>Current Page : {page}</StateDisplayContainer>;
}
