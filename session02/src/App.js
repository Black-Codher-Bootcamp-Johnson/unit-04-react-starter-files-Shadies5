import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style= {h1Style}>My React Page</h1>
      <h2 className= "bio">This is my first React page </h2>
      <p>This is my demo page</p>
    </div>
  );
}
const h1Style = {
  "fontSize": "30px",
  "color": "#cc0000",
  "textTransform": "uppercase"
};

export default App;
