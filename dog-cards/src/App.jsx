import Card from "./components/Card";
import { dogs } from "./data/dogs";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        {dogs.map((dog) => (
          <Card key={dog.id} img={dog.img} title={dog.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
