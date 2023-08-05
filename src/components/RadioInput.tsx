import styled from 'styled-components';

const StyledRadioInput = styled.input`
    width: 10%;
    padding: .8em 1em;
    margin-bottom: 1em;
    border: 1px solid var(--cool-gray);
    border-radius: 5px;
`

interface RadioInputProps {
    label: string,
    formStep: string,
}

export default function RadioInput({ label, formStep }: RadioInputProps) {
    return(
        <>
            <label>{label}</label>
            <StyledRadioInput type='radio' name={formStep} value={label} />
        </>
    )
}