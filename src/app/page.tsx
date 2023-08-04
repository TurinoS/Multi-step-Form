'use client'

import Steps from '@/components/Steps';
import styled from 'styled-components';
import bg from '../assets/bg-sidebar-desktop.svg';
import Input from '@/components/Input';

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

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: .5em;
  padding: 2em 4em;
  width: 70%;

  & h1 {
    font-size: 32px;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  gap: .25em;
`

const Button = styled.button`
  padding: 1em 2em;
  align-self: flex-end;
  border-radius: 10px;
  border: none;
  background-color: var(--marine-blue);
  color: var(--magnolia);
  font-size: 16px;

  &:hover {
    cursor: pointer;
    color: var(--light-blue);
    box-shadow: 2px 2px 6px 2px black;
    transition: 400ms;
  }
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
        <FormContainer>
          <h1>Dados pessoais</h1>
          <p>Por favor informe seu nome, email e telefone</p>
          <StyledForm>
            <Input label='Nome' name='name' type='text' placeholder='ex: Luiz da Silva' />
            <Input label='E-mail' name='email' type='email' placeholder='ex: luiz@silva.com' />
            <Input label='Telefone' name='phone' type='phone' placeholder='ex: +55 (12) 34567-8989' />
            <Button>Próximo</Button>
          </StyledForm>
        </FormContainer>
    </Container>
  )
}
