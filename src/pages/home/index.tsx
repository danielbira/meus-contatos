import BarraSuperior from '../../containers/BarraSuperior'
import ListaContatos from '../../containers/ListaContatos'
import BotaoAdicionar from '../../styles/components/BotaoAdicionar'

const Home = () => (
  <>
    <BarraSuperior mostrarFiltros />
    <ListaContatos />
    <BotaoAdicionar />
  </>
)

export default Home
