import styled from 'styled-components';

export const Button = styled.button`
padding: 1em 2em;
align-self: flex-end;
border-radius: 10px;
border: none;
background-color: var(--marine-blue);
color: var(--magnolia);
font-size: 16px;

&:hover {
  cursor: pointer;
  color: var(--light-blue);
  box-shadow: 2px 2px 6px 2px black;
  transition: 400ms;
}
`