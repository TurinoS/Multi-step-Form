import styled from 'styled-components';

const StyledSteps = styled.div`
  display: flex;
  align-items: center;
  gap: .5em;

  & span {
    font-size: 24px;
    font-weight: 600;
    padding: .4em .7em;
    border: 1px solid var(--black);
    border-radius: 1em;
  }
`

interface StepsProps {
    number: string,
    text: string,
}

export default function Steps({ number, text }: StepsProps) {
    return(
        <StyledSteps>
            <span>{number}</span>
            <div>
                <p>passo {number}</p>
                <p>{text}</p>
            </div>
        </StyledSteps>
    )
}