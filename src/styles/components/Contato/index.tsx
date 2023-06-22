import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../../store/reducers/contato'
import * as S from './styles'
import { type } from 'os'
import * as enums from '../../../utils/enums/Contato'

import ContatoClass from '../../../models/Contato'
import { getEffectiveTypeParameterDeclarations } from 'typescript'

type Props = ContatoClass

const Contato = ({
  nome,
  status,
  prioridade,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditanto] = useState(false)
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao() {
    setEstaEditanto(false)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao>Telefone: </S.Descricao>
      <S.Numero
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      ></S.Numero>
      <S.Descricao>E-mail: </S.Descricao>
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      ></S.Email>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    telefone,
                    email,
                    nome,
                    status,
                    prioridade,
                    id
                  })
                )
                setEstaEditanto(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditanto(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
