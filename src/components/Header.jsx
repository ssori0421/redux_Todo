import React from 'react';
import styled from 'styled-components';

export default function header() {
  return (
    <StHeader>
      <span>Todolist</span>
      <span>React</span>
    </StHeader>
  );
}

const StHeader = styled.header`
  background-color: white;
  border: thin solid lightgray;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  margin: auto;
  max-width: 1200px;
  min-width: 800px;
`;
