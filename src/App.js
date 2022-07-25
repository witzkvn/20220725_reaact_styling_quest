import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/card";

function App() {
  return (
    <div className="App">
      <Card
        title="Rozes"
        artist="Under the Grave"
        year="2016"
        imageUrl="https://i.discogs.com/Lfxt0jHdRcZd8nhTQyQqlfg7gL0OcxetjWzB5b0Yk94/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNDE5/NTQzLTE1NTM4NTUw/MDAtNTkyNi5qcGVn.jpeg"
      />
    </div>
  );
}

export default App;
