import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    padding: .8em 1em;
    margin-bottom: 1em;
    border: 1px solid var(--cool-gray);
    border-radius: 5px;
`

interface InputProps {
    label: string,
    name: string,
    placeholder: string,
}

export default function TextInput({ name, placeholder, label }: InputProps) {
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <StyledInput type='text' name={name} id={name} placeholder={placeholder} required />
        </>
    )
}