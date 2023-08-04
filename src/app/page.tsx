'use client'

import Steps from '@/components/Steps';
import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--gray);
  margin: 15vh auto;
  padding: 1em;
  width: 55vw;
  height: 70vh;
  border-radius: var(--radius);
  display: flex;
`

const StepsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
`

export default function Home() {
  return (
    <Container>
        <StepsContainer>
          <Steps number='1' text='Seus dados' />
          <Steps number='2' text='Plano' />
          <Steps number='3' text='Serviços' />
          <Steps number='4' text='Revisar' />
        </StepsContainer>
        <section>
          <input type='text' />
        </section>
    </Container>
  )
}
