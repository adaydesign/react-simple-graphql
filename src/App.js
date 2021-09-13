import { createContext, useState } from "react";
import FilterInput from "./FilterInput";
import Table from "./Table";
export const FilterContext = createContext("")

const App = () => {
  const [filter, setFilter] = useState({type:"vocab",text:""})
  return (
    <FilterContext.Provider value={[filter, setFilter]}>
      <h1>List of the Law Vocabulary</h1>
      <div>
        <FilterInput />
        </div>
      <div>
        <Table />
      </div>
    </FilterContext.Provider>
  );
}

export default App;
