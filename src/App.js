import './App.css';
import Header from './components/ui/header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterGird from './components/characters/CharacterGird';
import Search from './components/ui/Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      // console.log(result.data);;
      const test = await axios(`https://foodish-api.herokuapp.com/api/images/biryani/`)
      console.log(test)
      setItems(result.data);;
      setIsLoading(false);;
    };
    fetchItems();;

  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q)=>setQuery(q)} />
      <CharacterGird isLoading={isLoading} items={items}  />
    </div>
  );
}

export default App;
