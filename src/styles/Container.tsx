import styled from "styled-components";
import bg from "../assets/bg-sidebar-desktop.svg";
import bgMobile from "../assets/bg-sidebar-mobile.svg";

export const Container = styled.div`
  background-color: var(--white);
  box-shadow: 2px 2px 6px 2px var(--pastel-blue);
  margin: 5vh auto;
  padding: 1em;
  width: 800px;
  height: 90vh;
  border-radius: 15px;
  display: flex;

  @media (max-width: 850px) {
    width: 700px;
  }

  @media (max-width: 650px) {
    width: 90vw;
    height: 60vh;
    margin: 100px auto;
    padding: .25em;
  }
`;

export const StepsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  border-radius: 10px;
  background: url(${bg.src});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 275px;

  @media (max-width: 650px) {
    background: url(${bgMobile.src});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    border-radius: 0;
    width: 100vw;
    height: 125px;
    flex-direction: row;
  }
`;
