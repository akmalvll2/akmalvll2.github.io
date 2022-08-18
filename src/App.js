import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundVideoPlayer from 'react-background-video-player'
import Navi from './components/navigation/Navigation'
import Homepage from './components/homepage/Homepage'

function App() {
  return (
    <div className="App">
      <BackgroundVideoPlayer 
        src=''
        autoPlay={true}
        muted={true}
      />
      <Navi />
      <Homepage />
    </div>
  );
}

export default App;
