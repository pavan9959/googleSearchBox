import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setText] = useState("");
  const [result,setResult]=useState("")

  const handleFilter = (e) => {
    setText(e.target.value);
    let val=e.target.value
    const newFilter = data.filter((ele) => {
      if(ele.type.toLowerCase().includes(val.toLowerCase()) || ele.label.toLowerCase().includes(val.toLowerCase())){
        return ele
      }
    });
    
    if (val === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleClear = () => {
    setFilteredData([]);
    setText("");
  };

  const handleClick=(value)=>{
    setResult(value)
    setFilteredData([])
    setText(value)
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleFilter}
          style={{width:"40rem"}}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={handleClear} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="filterdata">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div key={key} className="suggestion" onClick={()=>{handleClick(value.type)}}  >
                <p>{value.type} </p>
              </div>
            );
          })}
        </div>
      )}
      {result!="" && <div style={{marginTop:"4%",textAlign:"center",fontSize:"2rem"}} >{
        result}</div>}
    </div>
  );
}

export default SearchBar;
