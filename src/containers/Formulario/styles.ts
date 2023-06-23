import styled from 'styled-components'
import { Botao } from '../../styles/components/Contato/styles'
import variaveis from '../../styles/variaveis'

export const Titulo = styled.p`
  margin-bottom: 16px;
  margin-left: 40px;
  font-weight: bold;
  color: #7a3e3e;
  font-size: 40px;
`

export const Campo = styled.input`
  padding: 16px;
  background-color: #47a992;
  border-radius: 8px;
  font-weight: bold;
  color: #eeeeee;
  border-color: #eeeeee;
  margin-left: 40px;
  width: 50%;
  margin-bottom: 16px;
`

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
`

export const Opcoes = styled.div`
  margin-bottom: 16px;
  margin-left: 40px;

  label {
    margin-right: 16px;
  }
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
  margin-left: 40px;
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
