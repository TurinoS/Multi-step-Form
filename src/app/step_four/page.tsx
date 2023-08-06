"use client";

import styled from "styled-components";
import Steps from "@/components/Steps";
import { Container, StepsContainer } from "@/styles/Container";
import { FormContainer } from "@/styles/Step1.styles";
import LinkSection from "@/components/LinkSection";
import Link from "next/link";

const StyledForm4 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  gap: 0.25em;
  background-color: var(--light-gray);
  border-radius: 10px;

  & .container {
    padding: 0.75em 2em;

    .principal {
      border-bottom: 2px solid var(--cool-gray);
      font-weight: 600;

      & p {
        color: var(--marine-blue);
      }
    }
  }

  & section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5em;
    width: 100%;
    padding: 1em 0;

    & p {
      display: flex;
      flex-direction: column;
      color: var(--cool-gray);
      font-weight: 600;

      & a {
        font-weight: 400;
        color: var(--cool-gray);
        font-weight: 600;
      }
    }

    & span {
      font-size: 15px;
    }
  }
`;

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .5em 2em;

    & p {
      color: var(--cool-gray);
      font-weight: 600;
    }

    & span {
      font-size: 20px;
      color: var(--purplish-blue);
    }
`

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
          hrefNext="/step_four"
          display={true}
        />
      </FormContainer>
    </Container>
  );
}
