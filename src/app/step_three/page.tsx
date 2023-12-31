"use client";

import Steps from "@/components/Steps";
import LinkSection from "@/components/LinkSection";
import CheckboxInput from "@/components/CheckboxInput";
import { Container, StepsContainer } from "@/styles/Container";
import { FormContainer, StyledForm3 } from "@/styles/StyledForms";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function Step3() {
  const {
    filledStep3,
    setFilledStep3,
    yearly,
    sup,
    storage,
    profile,
    handleSup,
    handleStorage,
    handleProfile,
  } = useContext(AppContext);

  if (sup || storage || profile) {
    setFilledStep3(true);
  } else {
    setFilledStep3(false);
  }

  let price1 = "1"
  let price2 = "2"
  let price3 = "2"
  let time = "mês"

  if(!yearly) {
    price1 = "10"
    price2 = "20"
    price3 = "20"
    time = "ano"
  }

  return (
    <Container>
      <StepsContainer>
        <Steps number="1" text="Seus dados" active={false} />
        <Steps number="2" text="Plano" active={false} />
        <Steps number="3" text="Serviços" active={true} />
        <Steps number="4" text="Revisar" active={false} />
      </StepsContainer>
      <FormContainer>
        <div>
          <h1>Serviços</h1>
          <p>Escolha nossos serviços para melhorar seu desempenho</p>
        </div>
        <StyledForm3>
          <CheckboxInput
            formName="step3"
            formStep="1"
            label="Suporte personalizado"
            subtitle="Suporte 24/7"
            price={price1}
            time={time}
            handleFunction={handleSup}
            checked={sup}
          />
          <CheckboxInput
            formName="step3"
            formStep="2"
            label="Mais espaço de armazenamento"
            subtitle="1Tb extra"
            price={price2}
            time={time}
            handleFunction={handleStorage}
            checked={storage}
          />
          <CheckboxInput
            formName="step3"
            formStep="3"
            label="Perfil customizável"
            subtitle="personalize seu perfil"
            price={price3}
            time={time}
            handleFunction={handleProfile}
            checked={profile}
          />
        </StyledForm3>
        <LinkSection
          hrefBack="/step_two"
          hrefNext="/step_four"
          display={true}
          filled={filledStep3}
        />
      </FormContainer>
    </Container>
  );
}
