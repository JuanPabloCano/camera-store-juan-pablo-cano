import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ResponsiveAppBar from './components/NavBar';
import ItemList from './components/ItemList';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <div className="App">
        <ResponsiveAppBar />
        <Container>
          <ItemListContainer products="Cámaras " />
          <ItemList />
        </Container>
      </div>
    </>
  );
}

export default App;
