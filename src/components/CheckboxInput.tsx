import styled from 'styled-components';

const StyledCheckboxInput = styled.div`
    width: 100%;
    padding: .8em 1em;
    margin-bottom: 1em;
    border: 1px solid var(--cool-gray);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;

    & div {
        display: flex;
        gap: 1em;
    }

    & input {
        width: 18px;
    }

    & label {
        display: flex;
        flex-direction: column;
        gap: .25em;
        font-weight: 600;

        & p {
            color: var(--cool-gray);
            font-weight: 400;
        }
    }

    & span {
        align-self: center;
        color: var(--purplish-blue);
        font-size: 15px;
    }
`

interface CheckboxInputProps {
    label: string,
    formStep: string,
    formName: string,
    subtitle: string,
    price: string,
    time: string,
    checked: boolean,
    handleFunction: () => void;
}

export default function CheckboxInput({ label, formStep, formName, subtitle, price, time, handleFunction, checked }: CheckboxInputProps) {
    return(
        <StyledCheckboxInput>
            <div>
                <input type='checkbox' id={formStep} name={formName} value={label} onChange={handleFunction} checked={checked} />
                <label htmlFor={formStep}>
                    {label}
                    <p>{subtitle}</p>
                </label>
            </div>
            <span>+R${price}/{time}</span>
        </StyledCheckboxInput>
    )
}