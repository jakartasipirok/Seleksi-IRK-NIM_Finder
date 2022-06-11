import '../App.css';
import JSONDATA from '../data/data2.json';
import {useState} from 'react';
import { regexType, getQuery } from '../context/regex';
import { getNamaFak, getNamaJur } from '../context/getNamaFak';
function SearchFilter(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasilRegex, setHasilRegex] = useState('');
  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Input Query" 
        onChange={(event)=> {
          setSearchTerm(event.target.value);
          setHasilRegex(regexType(event.target.value));
        }} 
      />
      
      {JSONDATA.filter((val)=>{

        return getQuery(searchTerm, val, hasilRegex);
        // if (searchTerm == ""){
        //   return val
        // } else if (val[0].toLowerCase().includes(searchTerm.toLowerCase())){
        //   return val
        // }
      }).map((val) => {
        return (
        <div className="user"> 
          <p>{val[0]} {val[1]} {val[2]} {getNamaFak(val[1])} {getNamaJur(val[2])}</p>
        </div>
        );
      })}
    </div>
  );
}

export default SearchFilter;
