import Image from "next/image";
import styled from "styled-components";

const StyledRadioInput = styled.div`
  width: 32.5%;
  padding: 0.8em 1em;
  margin-bottom: 1em;
  border: 1px solid var(--cool-gray);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  font-weight: 600;

  @media (max-width: 850px) {
    padding: 0.8em .5em;
  }

  @media (max-width: 650px) {
    width: 100%;
    margin-bottom: .5em;
    flex-direction: row;

    & label {
      display: flex;
      align-items: flex-start;
      gap: 1em;
      width: 150px;
    }
  }

  & img {
    margin: 0 2.5em 2.5em 0;

    @media (max-width: 650px) {
      margin: 0;
    }
  }

  & span {
    font-weight: 400;
    font-size: 15px;
    color: var(--cool-gray);

    @media (max-width: 650px) {
      align-self: flex-end;
      position: relative;
      left: -102px;
    }
  }

  & input {
    display: none;
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    min-width: 92px;
    text-align: end;

    @media (max-width: 420px) {
      display: none;
    }
  }
`;

const StyledRadioInputSelected = styled.div`
  width: 32.5%;
  padding: 0.8em 1em;
  margin-bottom: 1em;
  border: 1px solid var(--marine-blue);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  font-weight: 600;

  @media (max-width: 850px) {
    padding: 0.8em .5em;
  }

  @media (max-width: 650px) {
    width: 100%;
    margin-bottom: .5em;
    flex-direction: row;
    border: 2px solid var(--marine-blue);

    & label {
      display: flex;
      align-items: flex-start;
      gap: 1em;
      width: 150px;
    }
  }

  & img {
    margin: 0 2.5em 2.5em 0;

    @media (max-width: 650px) {
      margin: 0;
    }
  }

  & span {
    font-weight: 400;
    font-size: 15px;
    color: var(--cool-gray);

    @media (max-width: 650px) {
      align-self: flex-end;
      position: relative;
      left: -102px;
    }
  }

  & input {
    display: none;
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    min-width: 92px;
    text-align: end;

    @media (max-width: 420px) {
      display: none;
    }
  }
`;

interface RadioInputProps {
  label: string;
  formStep: string;
  formName: string;
  imgSrc: string;
  price: string;
  selected: boolean;
  yearly: boolean;
  handleFunction: () => void;
}

export default function RadioInput({
  label,
  formStep,
  formName,
  imgSrc,
  price,
  yearly,
  handleFunction,
  selected,
}: RadioInputProps) {
  if (selected) {
    return (
      <StyledRadioInputSelected>
        <label htmlFor={formStep}>
          <Image src={imgSrc} alt="icon" width={35} height={35} />
          {label}
        </label>
        <span>{price}</span>
        {!yearly ? <p className="discount">2 meses grátis</p> : null}
        <input
          type="radio"
          id={formStep}
          name={formName}
          value={label}
          onChange={handleFunction}
        />
      </StyledRadioInputSelected>
    );
  } else {
    return (
      <StyledRadioInput>
        <label htmlFor={formStep}>
          <Image src={imgSrc} alt="icon" width={35} height={35} />
          {label}
        </label>
        <span>{price}</span>
        {!yearly ? <p className="discount">2 meses grátis</p> : null}
        <input
          type="radio"
          id={formStep}
          name={formName}
          value={label}
          onChange={handleFunction}
        />
      </StyledRadioInput>
    );
  }
}
