"use client";

import { useContext } from "react";
import Switch from "react-switch";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import Steps from "@/components/Steps";
import RadioInput from "@/components/RadioInput";
import LinkSection from "@/components/LinkSection";
import { Container, StepsContainer } from "@/styles/Container";
import { FormContainer, StyledForm2 } from "@/styles/StyledForms";
import { AppContext } from "@/context/AppContext";

export default function Step2() {
  const {
    handleYearly,
    yearly,
    handleArcade,
    handleAdvanced,
    handlePro,
    arcade,
    advanced,
    pro,
    filledStep2,
    setFilledStep2,
  } = useContext(AppContext);

  let price1 = "R$9/m";
  let price2 = "R$12/m";
  let price3 = "R$15/m";

  if (yearly) {
    price1 = "R$9/m";
    price2 = "R$12/m";
    price3 = "R$15/m";
  } else {
    price1 = "R$90/m";
    price2 = "R$120/m";
    price3 = "R$150/m";
  }

  if(arcade || advanced || pro) {
    setFilledStep2(true)
  } else {
    setFilledStep2(false)
  }

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
            price={price1}
            yearly={yearly}
            handleFunction={handleArcade}
            selected={arcade}
          />
          <RadioInput
            label="Avançado"
            formStep="2"
            formName="step2"
            imgSrc={icon2}
            price={price2}
            yearly={yearly}
            handleFunction={handleAdvanced}
            selected={advanced}
          />
          <RadioInput
            label="Profissional"
            formStep="3"
            formName="step2"
            imgSrc={icon3}
            price={price3}
            yearly={yearly}
            handleFunction={handlePro}
            selected={pro}
          />
          <section>
            {!yearly ? <span>Mensal</span> : <p>Mensal</p>}
            <Switch
              onChange={handleYearly}
              checked={yearly ? false : true}
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={16}
              height={20}
              width={40}
            />
            {yearly ? <span>Anual</span> : <p>Anual</p>}
          </section>
        </StyledForm2>
        <LinkSection hrefBack="/" hrefNext="/step_three" display={true} filled={filledStep2} />
      </FormContainer>
    </Container>
  );
}
