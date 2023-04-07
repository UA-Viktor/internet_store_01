import logo from "./logo.svg";
import { MyGallery } from "./components/MyGallery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyGallery />
      </header>
    </div>
  );
}

export default App;
