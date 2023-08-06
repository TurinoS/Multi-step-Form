'use client'

import styled from 'styled-components';
import Steps from '@/components/Steps';
import { Container, StepsContainer } from '@/styles/Container';
import { FormContainer } from '@/styles/Step1.styles';
import LinkSection from '@/components/LinkSection';
import CheckboxInput from '@/components/CheckboxInput';

const StyledForm3 = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    gap: .25em;

    & section {
        background-color: var(--light-gray);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5em;
        width: 100%;
        padding: .5em;
        border-radius: 5px;
    }
`  

export default function Step3() {
  return (
    <Container>
        <StepsContainer>
          <Steps number='1' text='Seus dados' active={false} />
          <Steps number='2' text='Plano' active={false} />
          <Steps number='3' text='Serviços' active={true} />
          <Steps number='4' text='Revisar' active={false} />
        </StepsContainer>
        <FormContainer>
            <div>
                <h1>Serviços</h1>
                <p>Escolha nossos serviços para melhorar seu desempenho</p>
            </div>
          <StyledForm3>
            <CheckboxInput formName='step3' formStep='1' label='Suporte personalizado' subtitle='Suporte 24/7' price='1' time='m' />
            <CheckboxInput formName='step3' formStep='2' label='Mais espaço de armazenamento' subtitle='1Tb extra' price='2' time='m' />
            <CheckboxInput formName='step3' formStep='3' label='Perfil customizável' subtitle='personalize seu perfil' price='2' time='m' />
          </StyledForm3>
            <LinkSection hrefBack='/step_two' hrefNext='/step_four' display={true} />
        </FormContainer>
    </Container>
  )
}
