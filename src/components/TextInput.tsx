import styled from 'styled-components';
import { ChangeEvent } from 'react';

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
    value: string,
    handleFunction: (e: ChangeEvent<HTMLInputElement>) => void,
}

export default function TextInput({ name, placeholder, label, value, handleFunction }: InputProps) {
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <StyledInput type='text' name={name} id={name} placeholder={placeholder} onChange={handleFunction} value={value} />
        </>
    )
}