import "./App.css";
import Header from "./Components/UI/Header/Header";
import ToDoesList from "./Components/ToDoes/ToDoesList/ToDoesList";
import Input from "./Components/UI/Input/Input";

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <ToDoesList />
    </div>
  );
}

export default App;
