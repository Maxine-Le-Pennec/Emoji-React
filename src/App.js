import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import emoji from "./emoji.json";
import Lines from "./components/Lines";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <header>
        <Search search={search} setSearch={setSearch}></Search>
      </header>

      <main>
        {emoji.map((elem, index) => {
          // console.log(elem);
          const tab = [];
          if (elem.keywords.indexOf(search.toLocaleLowerCase()) !== -1) {
            tab.push(<Lines key={index} elem={elem} />);
          }
          return tab;
        })}
      </main>
    </div>
  );
}
export default App;
