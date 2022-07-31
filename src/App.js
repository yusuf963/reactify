import UserLocation from "./components/UserLocation";
import SpeechRecognition from "./components/SpeechRecognition";
import FetchImages from "./components/FetchImages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserLocation />
      <SpeechRecognition />
      <FetchImages />
    </div>
  );
}

export default App;
