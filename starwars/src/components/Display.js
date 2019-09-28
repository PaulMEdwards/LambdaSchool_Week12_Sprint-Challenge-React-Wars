import React from 'react';
import styled from 'styled-components';

//#region Styled Component Definitions
const Person = styled.div`
  padding: 5px;
  margin: 5px;
  background-color: white;
  border: solid white;
  border-radius: 5px;
  box-shadow: 0px 0px 0.25em gray, 0px 0px 0.5em black;
`;
const PersonPrimaryData = styled.h3`
  margin: 2em 0;
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
  const { data } = props;

  console.log('props: ', props);
  console.log('data: ', data);

  data.map((d) => {
    /* jshint ignore:start */
    return (
      <Person>
        <PersonPrimaryData>Name: {d.name}</PersonPrimaryData>
        {/* <PersonSecondaryData>Species: <Species data={d.species} /></PersonSecondaryData> */}
        <PersonSecondaryData>Species: {d.species}</PersonSecondaryData>
        {/* <PersonSecondaryData>Home World: <Homeworld data={d.homeworld} /></PersonSecondaryData> */}
        <PersonSecondaryData>Home World: {d.homeworld}</PersonSecondaryData>
        <PersonTertiaryData>Height: {d.height}</PersonTertiaryData>
        <PersonTertiaryData>Mass: {d.mass}</PersonTertiaryData>
        <PersonTertiaryData>Gender: {d.gender}</PersonTertiaryData>
        <PersonTertiaryData>Hair Color: {d.hair_color}</PersonTertiaryData>
        <PersonTertiaryData>Skin Color: {d.skin_color}</PersonTertiaryData>
        <PersonTertiaryData>Eye Color: {d.eye_color}</PersonTertiaryData>
        <PersonTertiaryData>Birth Year: {d.birth_year}</PersonTertiaryData>
      </Person>
    );
    /* jshint ignore:end */
  });
};

export default Display;