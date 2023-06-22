import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroContato = ({ ativo, contador, legenda }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador> {contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroContato
