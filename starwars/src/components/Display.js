import React from 'react';
import styled from 'styled-components';

//#region Styled Component Definitions
const Person = styled.div`
  padding: 15px;
  margin: 2em;
  background-color: #00000066;
  border: thin black;
  border-size: 3px;
  border-radius: 5px;
  box-shadow: 0px 0px 0.25em gray, 0px 0px 0.5em black;
`;
const PersonPrimaryData = styled.h3`
  margin: 1.25em 0;
  color: white;
  text-shadow: -3px -3px 0.25em gray, 3px 3px 0.5em black;
`;
const PersonSecondaryData = styled.h4`
  margin: 1em 0;
  color: white;
  text-shadow: -3px -3px 0.25em gray, 3px 3px 0.5em black;
`;
const PersonTertiaryData = styled.h5`
  margin: 0.5em 0;
  color: white;
  text-shadow: -3px -3px 0.25em gray, 3px 3px 0.5em black;
`;
//#endregion Styled Component Definitions

const Display = (props) => {
  console.log('props.data: ', props.data);

  return (
    <React.Fragment>
      {
        props.data.map((c) => {
          return (
            /* jshint ignore:start */
            <Person>
              <PersonPrimaryData>Name: {c.name}</PersonPrimaryData>
              {/* <PersonSecondaryData>Species: <Species data={d.species} /></PersonSecondaryData> */}
              <PersonSecondaryData>Species: {c.species}</PersonSecondaryData>
              {/* <PersonSecondaryData>Home World: <Homeworld data={d.homeworld} /></PersonSecondaryData> */}
              <PersonSecondaryData>Home World: {c.homeworld}</PersonSecondaryData>
              <PersonTertiaryData>Height: {c.height}</PersonTertiaryData>
              <PersonTertiaryData>Mass: {c.mass}</PersonTertiaryData>
              <PersonTertiaryData>Gender: {c.gender}</PersonTertiaryData>
              <PersonTertiaryData>Hair Color: {c.hair_color}</PersonTertiaryData>
              <PersonTertiaryData>Skin Color: {c.skin_color}</PersonTertiaryData>
              <PersonTertiaryData>Eye Color: {c.eye_color}</PersonTertiaryData>
              <PersonTertiaryData>Birth Year: {c.birth_year}</PersonTertiaryData>
            </Person>
            /* jshint ignore:end */
          );
        })
      }
    </React.Fragment>
  );
};

export default Display;
