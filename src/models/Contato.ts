import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  prioridade: enums.Prioridade
  status: enums.Status
  telefone: string
  email: string
  id: number

  constructor(
    nome: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    telefone: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.prioridade = prioridade
    this.status = status
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}

export default Contato
