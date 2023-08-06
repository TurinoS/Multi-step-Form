"use client";

import Link from "next/link";
import Steps from "@/components/Steps";
import LinkSection from "@/components/LinkSection";
import { Container, StepsContainer } from "@/styles/Container";
import { FormContainer, StyledForm4, Total } from "@/components/StyledForms";

export default function Step4() {
  return (
    <Container>
      <StepsContainer>
        <Steps number="1" text="Seus dados" active={false} />
        <Steps number="2" text="Plano" active={false} />
        <Steps number="3" text="Serviços" active={false} />
        <Steps number="4" text="Revisar" active={true} />
      </StepsContainer>
      <FormContainer>
        <div>
          <h1>Revisando</h1>
          <p>Verifique se as informações estão corretas</p>
        </div>
        <StyledForm4>
          <div className="container">
            <section className="principal">
              <p>
                Iniciante (Mensal)
                <Link href="/step_two">Alterar</Link>
              </p>
              <span>R$9/m</span>
            </section>
            <section>
              <p>Suporte personalizado</p>
              <span>+R$1/m</span>
            </section>
            <section>
              <p>Mais armazenamento</p>
              <span>+R$2/m</span>
            </section>
          </div>
        </StyledForm4>
        <Total>
          <p>Total por mês</p>
          <span>R$12/m</span>
        </Total>
        <LinkSection
          hrefBack="/step_three"
          hrefNext="/step_five"
          display={true}
        />
      </FormContainer>
    </Container>
  );
}
