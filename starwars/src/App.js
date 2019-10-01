import React, { useEffect, useState } from 'react';
import Display from './components/Display';
import styled from 'styled-components';
import Axios from "axios";
import './App.css';

const apiuri = `https://swapi.co/api`;

//#region Styled Component Definitions
const WrapperDiv = styled.div`
  margin: 2em auto;
`;
const H1 = styled.h1`
  color: white;
  text-shadow: -3px -3px 0.25em gray, 3px 3px 0.5em black;
  margin-bottom: 2em;
`;
const H2 = styled.h2`
  color: white;
  text-shadow: -3px -3px 0.25em gray, 3px 3px 0.5em black;
  margin-bottom: 1.75em;
`;
//#endregion Styled Component Definitions

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    async function fetchSWdata() {
      try {
        let promiseSWdata = await Axios.get(`${apiuri}/people/`);
        console.log('data: ', promiseSWdata);
        setCharacterData(promiseSWdata.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSWdata();
  }, []);


  return (
    /* jshint ignore:start */
    <div className="App">
      <WrapperDiv>
        <H1>React Wars</H1>
        <H2>Characters</H2>
        <Display data={characterData} />
      </WrapperDiv>
    </div>
    /* jshint ignore:end */
  );

};

export default App;
