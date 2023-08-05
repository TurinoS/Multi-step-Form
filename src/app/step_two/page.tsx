'use client'

import styled from 'styled-components';
import Steps from '@/components/Steps';
import { Container, StepsContainer } from '@/styles/Container';
import { FormContainer } from '@/styles/Step1.styles';
import { Button } from '@/styles/Button.style';
import TextInput from '@/components/TextInput';
import RadioInput from '@/components/RadioInput';

const StyledForm2 = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1em;
    gap: .25em;
`



export default function Step2() {
  return (
    <Container>
        <StepsContainer>
          <Steps number='1' text='Seus dados' active={false} />
          <Steps number='2' text='Plano' active={true} />
          <Steps number='3' text='Serviços' active={false} />
          <Steps number='4' text='Revisar' active={false} />
        </StepsContainer>
        <FormContainer>
          <h1>Plano</h1>
          <p>Escolha seu plano e se pretende pagar o plano anual ou mensal</p>
          <StyledForm2>
            <RadioInput label='Iniciante' formStep='2' />
            <RadioInput label='Avançado' formStep='2' />
            <RadioInput label='Profissional' formStep='2' />
            <Button type='submit'>Próximo</Button>
          </StyledForm2>
        </FormContainer>
    </Container>
  )
}
