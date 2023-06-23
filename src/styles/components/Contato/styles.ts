import styled from 'styled-components'
import variaveis from '../../variaveis'

import * as enums from '../../../utils/enums/Contato'
import { Botao } from '../..'

type TagProps = {
  prioridade?: enums.Prioridade

  parametro: 'prioridade'
}

function retonarCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.FAMILIA) return variaveis.amarelo2
    if (props.prioridade === enums.Prioridade.OUTROS) return variaveis.azul
  }
  return '#A1C2F1'
}

export const Card = styled.div`
  background-color: #7a3e3e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  display: inline-block;
  margin: 15px;
`

export const Nome = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
  color: #eeeeee;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  border-radius: 8px;
  background-color: ${(props) => retonarCorDeFundo(props)};
  display: inline-block;
  margin-right: 16px;
  margin-bottom: 16px;
`
export const Descricao = styled.h2`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 16px;
  color: #eeeeee;
`

export const Numero = styled.textarea`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-top: 12px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Email = styled.textarea`
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-top: 12px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export { Botao }
