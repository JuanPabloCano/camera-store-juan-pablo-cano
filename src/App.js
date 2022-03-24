import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ResponsiveAppBar from './components/NavBar';
// import ItemList from './components/ItemList';
import ItemCount from './components/ItemCount';

function App() {

  const stock = 10;

  return (
    <>
      <div className="App">
        <ResponsiveAppBar />
        <ItemListContainer products= "Cámaras " />
        <ItemCount stock = {stock}/>
      </div>
    </>
  );
}

export default App;
