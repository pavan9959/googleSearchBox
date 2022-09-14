import "./App.css";
import SearchBar from "./comp/SearchBar";
import data from "./drug1.json";

function App() {
  return (
    <div className="App">
      <img style={{width:"17rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ecxdsKsLN7AmGOVDcHhdtsEwLBwrpSRuA7Is3n55Lg&s" />
      <SearchBar   data={data} />
    </div>
  );
}

export default App;
