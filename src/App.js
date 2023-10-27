import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navigation/NavBar";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
