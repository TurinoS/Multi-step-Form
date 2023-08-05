import Image from 'next/image';
import styled from 'styled-components';

const StyledRadioInput = styled.div`
    width: 30%;
    padding: .8em 1em;
    margin-bottom: 1em;
    border: 1px solid var(--cool-gray);
    border-radius: 5px;

    & img {
        padding-bottom: 2em;
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
}

export default function RadioInput({ label, formStep, formName, imgSrc }: RadioInputProps) {
    return(
        <StyledRadioInput>
            <label htmlFor={formStep}>
                <Image src={imgSrc} alt='icon' width={35} height={67} />
                {label}
            </label>
            <input type='radio' id={formStep} name={formName} value={label} />
        </StyledRadioInput>
    )
}