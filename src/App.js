import './App.css';
import ItemListConainter from './componentes/ItemListContaniner/ItemListContaniner';
import Nav from './componentes/Nav/Nav';
function App() {
  return (
    <>
      <Nav/>
      <ItemListConainter title="Mi pagina" description= "ecommerce"/>
    </>
  );
}

export default App;
