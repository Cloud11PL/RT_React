import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Character from './components/Character';
import Pagination from './components/Pagination';
import './characters.scss';
import Spinner from './components/Spinner';

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const baseURL = 'https://swapi.co/api/people/?page=';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { 
    const fetchCharacters = async () => {
      setIsLoading(true);
      const response = await axios.get(baseURL + currentPage);
      setCharacters(response.data.results);
      delete response.data.results;
      setPageInfo(response.data);
      setIsLoading(false);
    }; 
    fetchCharacters();
  }, [baseURL, currentPage]);

  const charactersToRender = () => 
    characters.map((singleCharacter) => 
      <Character key={singleCharacter.name} singleCharacter={singleCharacter} />);

  
  return (
    <div>
      <NavBar />
      <main>
        {isLoading && <Spinner />}
        <div className="characters" id="characters">
          {characters.length > 1 && charactersToRender()}
        </div>
        {characters.length > 1 
          && (
          <Pagination 
            pageInfo={pageInfo} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
}
