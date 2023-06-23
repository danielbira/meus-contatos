import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroContato from '../../styles/components/FiltroContato'
import * as S from './styles'
import { Botao, Campo } from '../../styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as emuns from '../../utils/enums/Contato'

type Props = {
  mostrarFiltros: boolean
}

const BarraSuperior = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroContato
                valor={emuns.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importante"
              />
              <FiltroContato
                valor={emuns.Prioridade.OUTROS}
                criterio="prioridade"
                legenda="outros"
              />
              <FiltroContato
                valor={emuns.Prioridade.FAMILIA}
                criterio="prioridade"
                legenda="família"
              />
              <FiltroContato criterio="todos" legenda="todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar aos contatos</Botao>
        )}
      </div>
    </S.Aside>
  )
}
export default BarraSuperior
