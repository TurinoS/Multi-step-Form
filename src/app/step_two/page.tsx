"use client";

import { useState } from "react";
import Switch from "react-switch";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import Steps from "@/components/Steps";
import RadioInput from "@/components/RadioInput";
import LinkSection from "@/components/LinkSection";
import { Container, StepsContainer } from "@/styles/Container";
import { FormContainer, StyledForm2 } from "@/components/StyledForms";

export default function Step2() {
  const [Yearly, setYearly] = useState(false);

  return (
    <Container>
      <StepsContainer>
        <Steps number="1" text="Seus dados" active={false} />
        <Steps number="2" text="Plano" active={true} />
        <Steps number="3" text="Serviços" active={false} />
        <Steps number="4" text="Revisar" active={false} />
      </StepsContainer>
      <FormContainer>
        <div>
          <h1>Plano</h1>
          <p>Escolha seu plano e se pretende pagar o plano anual ou mensal</p>
        </div>
        <StyledForm2>
          <RadioInput
            label="Iniciante"
            formStep="1"
            formName="step2"
            imgSrc={icon1}
            price="9"
            time="m"
          />
          <RadioInput
            label="Avançado"
            formStep="2"
            formName="step2"
            imgSrc={icon2}
            price="12"
            time="m"
          />
          <RadioInput
            label="Profissional"
            formStep="3"
            formName="step2"
            imgSrc={icon3}
            price="15"
            time="m"
          />
          <section>
            <p>Mensal</p>
            <Switch
              onChange={() => (Yearly ? setYearly(false) : setYearly(true))}
              checked={false}
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={16}
              height={20}
              width={40}
            />
            <p>Anual</p>
          </section>
        </StyledForm2>
        <LinkSection hrefBack="/" hrefNext="/step_three" display={true} />
      </FormContainer>
    </Container>
  );
}
