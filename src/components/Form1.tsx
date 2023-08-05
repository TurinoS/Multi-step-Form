import { StyledForm1 } from "@/styles/Step1.styles";
import TextInput from "./TextInput";
import { Button } from "@/styles/Button.style";

export default function Form1() {
    return(
        <StyledForm1>
            <TextInput label='Nome' name='name' placeholder='ex: Luiz da Silva' />
            <TextInput label='E-mail' name='email' placeholder='ex: luiz@silva.com' />
            <TextInput label='Telefone' name='phone' placeholder='ex: +55 (12) 34567-8989' />
            <Button type='submit'>Próximo</Button>
        </StyledForm1>
    )
}