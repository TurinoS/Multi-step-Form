'use client'

import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--gray);
  margin: 15vh auto;
  padding: 2em;
  width: 55vw;
  height: 70vh;
`

export default function Home() {
  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  )
}
