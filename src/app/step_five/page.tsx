"use client";

import Image from "next/image";
import check from "../../assets/icon-thank-you.svg";
import Steps from "@/components/Steps";
import { Container, StepsContainer } from "@/styles/Container";
import { StyledStep5 } from "@/components/StyledForms";

export default function Step4() {
  return (
    <Container>
      <StepsContainer>
        <Steps number="1" text="Seus dados" active={false} />
        <Steps number="2" text="Plano" active={false} />
        <Steps number="3" text="Serviços" active={false} />
        <Steps number="4" text="Revisar" active={true} />
      </StepsContainer>
      <StyledStep5>
        <Image src={check} alt="Ok" width={60} height={60} />
        <h2>Obrigado!</h2>
        <p>
          Obrigado por confirmar sua inscrição! Se divirta usando nossa
          plataforma. Se precisar, sinta-se livre para contactar nossa equipe de
          suporte por meio do email suporte@loremgaming.com
        </p>
      </StyledStep5>
    </Container>
  );
}
