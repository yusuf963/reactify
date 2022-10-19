import UserLocation from './components/UserLocation';
import SpeechRecognition from './components/SpeechRecognition'
import FetchImages from './components/FetchImages'
import Youtube from './components/youtubeApp/Youtube'
import './App.css';


function App() {
  return (
    <div className="App">
      <UserLocation />
      <SpeechRecognition />
      <FetchImages />
      <Youtube />

    </div>
  );
}

export default App;
