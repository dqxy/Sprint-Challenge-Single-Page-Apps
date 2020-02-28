import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
const Ss = styled.div`
  height: 30px;
  background: orange;
  color: black;
  border: 0;
  margin: 5px 10px;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  //const [pets, setPets] = useState([]);
  //const [breed, setBreed] = useState("mix");

  const [searchTerm, setSearchTerm] = useState("");
  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const test = response.data.results;
      var keyArray = test.map(function(item) { return item["name"]; });

      console.log(keyArray);
    


      const results = keyArray.filter(character =>
        character.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);




    })
  
}, [searchTerm]);


const handleChange = event => {
  // console.log(event.target.value)
  setSearchTerm(event.target.value);
};


  return (
    <section className="character-list">

<form>
     
        <Ss>Check out these characters</Ss>
        
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>

      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li key={character}>{character}</li>
          ))}
        </ul>
      </div>



    </section>
  );
}
