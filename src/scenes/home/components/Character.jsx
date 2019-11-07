import React from 'react';
import './Character.scss';

export default function Character({ singleCharacter }) {
  const sOrNoS = (len) => (len > 1 ? 's' : '');
  const starship = (startships) => (startships > 0 ? `Has ${startships} starship${sOrNoS(startships)}!` : 'Doesn\'t have any starships :c');
  const vehicle = (vehicles) => (vehicles > 0 ? `Has ${vehicles} vehicle${sOrNoS(vehicles)}!` : 'Doesn\'t have any vehicles :c');

  return (
    <div className="character">
      <p className="character__name">{singleCharacter.name}</p>
      <p>
        Birth year: 
        {' '}
        {singleCharacter.birth_year}
      </p>
      <p>
        Height: 
        {' '}
        {singleCharacter.height}
        {singleCharacter.height !== 'unknown' && ' cm'}
      </p>
      <p>
        Weight: 
        {' '}
        {singleCharacter.mass}
        {singleCharacter.mass !== 'unknown' && ' kg'}
      </p>
      <p>
        Films: 
        {' '}
        {singleCharacter.films.length}
      </p>
      <p>
        Hair color: 
        {' '}
        {singleCharacter.hair_color}
      </p>
      <p>{vehicle(singleCharacter.vehicles.length)}</p>
      <p>{starship(singleCharacter.starships.length)}</p>
    </div>
  );
}
