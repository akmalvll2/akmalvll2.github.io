import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button } from 'react-bootstrap'
import CV from '../src/asset/BadrulAkmalResume.pdf'

import Navi from './components/navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main-content">
        <Button href={CV} variant="custom" download>
          Download
        </Button>
      </Container>
    </div>
  );
}

export default App;
