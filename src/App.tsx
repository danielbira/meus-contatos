import { Provider } from 'react-redux'
import BarraSuperior from './containers/BarraSuperior'
import ListaContatos from './containers/ListaContatos'
import EstiloGlobal from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <BarraSuperior />
      <ListaContatos />
    </Provider>
  )
}

export default App
