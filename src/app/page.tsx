'use client'

import Steps from '@/components/Steps';
import styled from 'styled-components';
import bg from '../assets/bg-sidebar-desktop.svg';

const Container = styled.div`
  background-color: var(--white);
  box-shadow: 2px 2px 6px 2px var(--marine-blue);
  margin: 15vh auto;
  padding: 1em;
  width: 55vw;
  height: 70vh;
  border-radius: 15px;
  display: flex;
`

const StepsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  border-radius: 10px;
  background: url(${bg.src});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 200px;
`

export default function Home() {
  return (
    <Container>
        <StepsContainer>
          <Steps number='1' text='Seus dados' active={true} />
          <Steps number='2' text='Plano' active={false} />
          <Steps number='3' text='Serviços' active={false} />
          <Steps number='4' text='Revisar' active={false} />
        </StepsContainer>
        <section>
          <input type='text' />
        </section>
    </Container>
  )
}
