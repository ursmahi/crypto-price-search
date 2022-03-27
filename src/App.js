import './App.css';
import {useEffect,useState} from 'react';

import Axios from 'axios';
import Coin from './Components/Coin';
function App() {
  const [searchWord,setSearchWord] = useState('');

  const [listOfCoins,setListOfCoins]=useState([])
  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&currency=INR').then(
      (response) => {
        setListOfCoins(response.data.coins)
      }
    )
  },[]);
  const filteredCoins = listOfCoins.filter((coin) => {
    return (coin.name.toLowerCase().includes(searchWord.toLowerCase())
    || coin.symbol.toLowerCase().includes(searchWord.toLowerCase())
    );
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
      <input type="text" placeholder="Search for a coin" onChange={
        (event)=>{
          setSearchWord(event.target.value)
        }
        }/>
      </div>

      <div className="cryptoDisplay">
        {filteredCoins.map(
          (coin)=>{
          return( <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/> )
          }
        )}
        </div>
    </div>
  );
}

export default App;
