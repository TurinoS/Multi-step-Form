'use client'

import Steps from '@/components/Steps';
import Input from '@/components/Input';
import { Container, StepsContainer } from '@/styles/Container';
import { FormContainer, StyledForm } from '@/styles/Step1.styles';
import { Button } from '@/styles/Button.style';

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
            <Button type='submit'>Próximo</Button>
          </StyledForm>
        </FormContainer>
    </Container>
  )
}
