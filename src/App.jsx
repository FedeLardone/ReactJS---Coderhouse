import { NavBar } from "./components/NavBar";
import { ItemListContainer} from "./components/ItemListContainer";


function App() {
  return (
  <>
  <NavBar />
  <ItemListContainer greetings="Hola" />
  </>);
}

export default App