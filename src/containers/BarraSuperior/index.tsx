import { useDispatch, useSelector } from 'react-redux'
import FiltroContato from '../../styles/components/FiltroContato'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraSuperior = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <S.Campo
        type="text"
        placeholder="Buscar"
        value={termo}
        onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
      />
      <S.Filtros>
        <FiltroContato legenda="importante" contador={1} />
        <FiltroContato legenda="família" contador={2} />
        <FiltroContato legenda="outros" contador={3} />
        <FiltroContato legenda="todos" contador={4} ativo />
      </S.Filtros>
    </S.Aside>
  )
}
export default BarraSuperior
