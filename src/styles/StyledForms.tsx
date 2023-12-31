import styled from "styled-components";

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5em;
  padding: 1.5em 3em;
  width: 70%;

  @media (max-width: 850px) {
    padding: 1.5em 1em;
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  & h1 {
    font-size: 32px;
  }
`;

export const StyledForm1 = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  gap: 0.25em;
`;

export const StyledForm2 = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
  gap: 0.25em;

  @media (max-width: 650px) {
    flex-direction: column;
  }

  & section {
    background-color: var(--light-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    width: 100%;
    padding: 0.5em;
    border-radius: 5px;

    & p {
      font-weight: 600;
    }

    & span {
      color: var(--cool-gray);
    }
  }
`;

export const StyledForm3 = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  gap: 0.25em;

  & section {
    background-color: var(--light-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    width: 100%;
    padding: 0.5em;
    border-radius: 5px;
  }
`;

export const StyledForm4 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: .5em;
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

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 2em;

  & p {
    color: var(--cool-gray);
    font-weight: 600;
  }

  & span {
    font-size: 20px;
    color: var(--purplish-blue);
  }
`;

export const StyledStep5 = styled.div`
  text-align: center;
  width: 70%;
  padding: 0 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75em;

  @media (max-width: 650px) {
    width: 100%;
  }

  & img {
    margin-bottom: 1em;
  }

  & p {
    color: var(--cool-gray);
  }
`;
