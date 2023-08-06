'use client'

import Steps from '@/components/Steps';
import { Container, StepsContainer } from '@/styles/Container';
import { FormContainer } from '@/styles/Step1.styles';
import Form1 from '@/components/Form1';
import LinkSection from '@/components/LinkSection';

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
          <div>
            <h1>Dados pessoais</h1>
            <p>Por favor informe seu nome, email e telefone</p>
          </div>
          <Form1 />
          <LinkSection hrefBack='/' hrefNext='/step_two' display={false} />
        </FormContainer>
    </Container>
  )
}
