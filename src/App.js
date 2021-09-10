import "./App.css";

import helloWorld from "./components/helloWorld";
import Counter from "./components/counter";
import SearchForm from "./components/searchForm";
import GenreToggle from "./components/genreToggle";

function App() {
  const genreList = [
    { id: 0, name: "ALL" },
    { id: 1, name: "DOCUMENTARY" },
    { id: 2, name: "COMEDY" },
    { id: 3, name: "HORROR" },
    { id: 4, name: "CRIME" },
  ];

  return (
    <div className="App">
      {helloWorld}
      <Counter />
      <SearchForm />
      <GenreToggle genreList={genreList} />
    </div>
  );
}

export default App;
