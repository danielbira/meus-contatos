import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Daniel Bira',
      prioridade: enums.Prioridade.IMPORTANTE,
      telefone: '(99) 00000-0000',
      email: 'danielbira@ebac.com'
    },
    {
      id: 2,
      nome: 'José João',
      prioridade: enums.Prioridade.FAMILIA,
      telefone: '(99) 00000-0000',
      email: 'josejoao@ebac.com'
    },
    {
      id: 3,
      nome: 'Maria Alves',
      prioridade: enums.Prioridade.OUTROS,
      telefone: '(99) 00000-0000',
      email: 'mariaalves@ebac.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: ' contato',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id != action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoExiste) {
        alert('Esse contato já existe')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNova = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
