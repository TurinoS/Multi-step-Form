import styled from 'styled-components';
import bg from '../assets/bg-sidebar-desktop.svg';

export const Container = styled.div`
    background-color: var(--white);
    box-shadow: 2px 2px 6px 2px var(--marine-blue);
    margin: 15vh auto;
    padding: 1em;
    width: 55vw;
    height: 70vh;
    border-radius: 15px;
    display: flex;
`

export const StepsContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    border-radius: 10px;
    background: url(${bg.src});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 30%;
`