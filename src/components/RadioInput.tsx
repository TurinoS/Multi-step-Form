import Image from 'next/image';
import styled from 'styled-components';

const StyledRadioInput = styled.div`
    width: 30%;
    padding: .8em 1em;
    margin-bottom: 1em;
    border: 1px solid var(--cool-gray);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: .25em;
    font-weight: 600;

    & img {
        padding-bottom: 2.5em;
    }

    & span {
        font-weight: 400;
        font-size: 15px;
        color: var(--cool-gray);
    }

    & input {
        display: none;
    }
`

interface RadioInputProps {
    label: string,
    formStep: string,
    formName: string,
    imgSrc: string,
    price: string,
    time: string,
}

export default function RadioInput({ label, formStep, formName, imgSrc, price, time }: RadioInputProps) {
    return(
        <StyledRadioInput>
            <label htmlFor={formStep}>
                <Image src={imgSrc} alt='icon' width={35} height={75} />
                {label}
            </label>
            <span>R${price}/{time}</span>
            <input type='radio' id={formStep} name={formName} value={label} />
        </StyledRadioInput>
    )
}