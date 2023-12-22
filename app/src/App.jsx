import { useEffect, useState } from 'react';
import './App.css'
import SearchResult from './components/SearchResult';

export const BASE_URL ="http://localhost:9000";

const App = () => {
    const [data, setData] = useState(null);
    const [loding, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=> {
      const fetchFoodData = async() => {
        try {
          const response = await fetch(BASE_URL)
        const json = await response.json();

        setData(json);
        setLoading(false)
        }catch(error) {
          setError("Unable to fetch Data")
          setLoading(false);
        }

    };
    fetchFoodData();
    },[]);

    if (loding) return <div>loding....</div>
    if (error) return <div>{error}</div>
    
  
  return <div>
    <div className="upper-part">
      <div className="navbar">
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder='Search Food....' />
        </div>
      </div>
        <div className="filter-button">
          <button>All</button>
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
        </div>  
    </div>
    <div className="body-container">
    {data && <SearchResult data={data} />}
    </div> 

  </div>;
};

export default App;
