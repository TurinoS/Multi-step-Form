import styled from 'styled-components';

const StyledSteps = styled.div`
  display: flex;
  align-items: center;
  gap: .5em;
  color: var(--pastel-blue);

  & span {
    font-size: 24px;
    font-weight: 600;
    padding: .4em .7em;
    border: 1px solid var(--light-blue);
    border-radius: 1em;
  }

  .active {
    background-color: var(--light-blue);
    color: var(--marine-blue);
  }
`

interface StepsProps {
    number: string,
    text: string,
    active: boolean,
}

export default function Steps({ number, text, active }: StepsProps) {
    return(
        <StyledSteps>
            {active ? 
                <span className='active'>{number}</span> :
                <span>{number}</span>
            }
            <div>
                <p>passo {number}</p>
                <p>{text}</p>
            </div>
        </StyledSteps>
    )
}