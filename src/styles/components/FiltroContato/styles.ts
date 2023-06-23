import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#47A992' : '#eeeeee')};
  background-color: ${(props) => (props.ativo ? '#7a3e3e' : '#7a3e3e')};
  color: ${(props) => (props.ativo ? '#47A992' : '#eeeeee')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
