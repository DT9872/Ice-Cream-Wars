import "./App.css";
import AdDesigner from "./components/AdDesigner";
import Header from "./components/Header";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <Header user="Dana" />
      <main>
        <AdDesigner />
        <Votes />
      </main>
    </div>
  );
}

export default App;
