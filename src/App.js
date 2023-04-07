import logo from "./logo.svg";
import MyGallery from "./components/MyGallery/MyGallery";
// import DemoCarousel from "./components/DemoCarousel/DemoCarousel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyGallery />
        {/* <DemoCarousel /> */}
        <div>Hello</div>
      </header>
    </div>
  );
}

export default App;
