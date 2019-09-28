import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from "axios";
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
// import CharacterCarousel from './components/Carousel';

const apiuri = `https://swapi.co/api/`;

//#region Styled Component Definitions
const WrapperDiv = styled.div`
  margin: 2em auto;
`;
const H1 = styled.h1`
  color: white;
  text-shadow: -3px -3px 0.25em gray, 3px 3px 0.5em black;
`;
const H2 = styled.h2`
  color: white;
  text-shadow: -3px -3px 0.25em gray, 3px 3px 0.5em black;
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
    // console.log('run effect');

    async function fetchSWdata(query, setStateFunction) { // jshint ignore:line
      // Fetch data
      await Axios.get(`${apiuri}${query}`)
        .then((d) => {
          console.log('d.data: ', d.data);
          setStateFunction(d.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

    fetchSWdata('people/', setCharacterData);

    // function populateImageSources() {
    //   let i = 0;
    //   characterData.forEach(() => {
    //     characterData[i].img_src = `https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`;
    //     i++;
    //   });
    //   console.log('characterData: ', characterData);
    // }
    // populateImageSources();
  }, [characterData]);

  return (
    /* jshint ignore:start */
    <div className="App">
      <WrapperDiv>
        <H1>React Wars</H1>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="danger">Danger</Button>
        <Button type="warning">Warning</Button>
      </WrapperDiv>

      {/* <CharacterCarousel items={characterData} /> */}

      <WrapperDiv>
        <H2>Characters</H2>
        <Display data={characterData} />
      </WrapperDiv>
    </div>
    /* jshint ignore:end */
  );
};

export default App;
