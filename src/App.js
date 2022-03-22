import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ResponsiveAppBar from './components/NavBar';

function App() {
  return (
    <>
      <div className="App">
        <ResponsiveAppBar />
        <ItemListContainer greeting="Espacio para el catalogo" />
      </div>
    </>
  );
}

export default App;
