"use client";

import Link from "next/link";
import Steps from "@/components/Steps";
import LinkSection from "@/components/LinkSection";
import { Container, StepsContainer } from "@/styles/Container";
import { FormContainer, StyledForm4, Total } from "@/styles/StyledForms";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function Step4() {
  const { yearly, arcade, advanced, pro, sup, storage, profile } =
    useContext(AppContext);

  let price = 0;

  if (arcade) {
    price = 9;
  } else if (advanced) {
    price = 12;
  } else if (pro) {
    price = 15;
  }

  if (!yearly) {
    price = price * 10;
  }

  if (sup && yearly) {
    price = price + 1;
  } else if (sup) {
    price = price + 10;
  }

  if (profile && yearly) {
    price = price + 2;
  } else if (profile) {
    price = price + 20;
  }

  if (storage && yearly) {
    price = price + 2;
  } else if (storage) {
    price = price + 20;
  }

  let time = "mês";
  let time2 = "Mensal";
  let priceSup = 1
  let priceStorage = 2
  let priceProfile = 2
  let priceArcade = 9
  let priceAdvanced = 12
  let pricePro = 15

  if (!yearly) {
    time = "ano";
    time2 = "Anual";
    priceSup = 10
    priceStorage = 20
    priceProfile = 20
     priceArcade = 90
    priceAdvanced = 120
    pricePro = 150
  }

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
            {arcade ? (
              <section className="principal">
                <p>
                  Iniciante ({time2})
                  <Link href="/step_two">Alterar</Link>
                </p>
                <span>{`+R$${priceArcade}/${time}`}</span>
              </section>
            ) : null}
            {advanced ? (
              <section className="principal">
                <p>
                  Iniciante ({time2})
                  <Link href="/step_two">Alterar</Link>
                </p>
                <span>{`+R$${priceAdvanced}/${time}`}</span>
              </section>
            ) : null}
            {pro ? (
              <section className="principal">
                <p>
                  Iniciante ({time2})
                  <Link href="/step_two">Alterar</Link>
                </p>
                <span>{`+R$${pricePro}/${time}`}</span>
              </section>
            ) : null}
            {sup ? (
              <section>
                <p>Suporte personalizado</p>
                <span>{`+R$${priceSup}/${time}`}</span>
              </section>
            ) : null}
            {storage ? (
              <section>
                <p>Mais armazenamento</p>
                <span>{`+R$${priceStorage}/${time}`}</span>
              </section>
            ) : null}
            {profile ? (
              <section>
                <p>Perfil customizável</p>
                <span>{`+R$${priceProfile}/${time}`}</span>
              </section>
            ) : null}
          </div>
        </StyledForm4>
        <Total>
          <p>Total por mês</p>
          <span>{`R$${price}/${!yearly ? "ano" : "mês"}`}</span>
        </Total>
        <LinkSection
          hrefBack="/step_three"
          hrefNext="/step_five"
          display={true}
          filled={true}
        />
      </FormContainer>
    </Container>
  );
}
