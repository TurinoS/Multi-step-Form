import Link from "next/link";
import styled from "styled-components";

const StyledLinkSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & a {
    text-decoration: none;
    color: var(--cool-gray);
  }

  & .button-style {
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
  }
`;

interface LinkSectionProps {
  hrefBack: string,
  hrefNext: string,
  display: boolean,
}

export default function LinkSection({ hrefBack, hrefNext, display }: LinkSectionProps) {
  return (
    <StyledLinkSection>
      {display ? <Link href={hrefBack} className="display">Voltar</Link> : <div></div>}
      <Link href={hrefNext} className="button-style">Próximo</Link>
    </StyledLinkSection>
  );
}
