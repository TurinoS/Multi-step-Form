"use client";

import { useContext } from "react";
import Steps from "@/components/Steps";
import LinkSection from "@/components/LinkSection";
import TextInput from "@/components/TextInput";
import { Container, StepsContainer } from "@/styles/Container";
import { FormContainer, StyledForm1 } from "@/styles/StyledForms";
import { AppContext } from "@/context/AppContext";

export default function Home() {
  const {
    handleUserName,
    handleUserEmail,
    handleUserPhone,
    userName,
    userEmail,
    userPhone,
    filledStep1,
    setFilledStep1,
  } = useContext(AppContext);

  if (userName.length > 3 && userEmail.length > 9 && userPhone.length > 10) {
    setFilledStep1(true);
  } else {
    setFilledStep1(false);
  }

  return (
    <Container>
      <StepsContainer>
        <Steps number="1" text="Seus dados" active={true} />
        <Steps number="2" text="Plano" active={false} />
        <Steps number="3" text="Serviços" active={false} />
        <Steps number="4" text="Revisar" active={false} />
      </StepsContainer>
      <FormContainer>
        <div>
          <h1>Dados pessoais</h1>
          <p>Por favor informe seu nome, email e telefone</p>
        </div>
        <StyledForm1>
          <TextInput
            label="Nome"
            name="name"
            placeholder="ex: Luiz da Silva"
            value={userName}
            handleFunction={(e) => handleUserName(e)}
          />
          <TextInput
            label="E-mail"
            name="email"
            placeholder="ex: luiz@silva.com"
            value={userEmail}
            handleFunction={(e) => handleUserEmail(e)}
          />
          <TextInput
            label="Telefone"
            name="phone"
            placeholder="ex: +55 (12) 34567-8989"
            value={userPhone}
            handleFunction={(e) => handleUserPhone(e)}
          />
        </StyledForm1>
        <LinkSection
          hrefBack="/"
          hrefNext="/step_two"
          display={false}
          filled={filledStep1}
        />
      </FormContainer>
    </Container>
  );
}
