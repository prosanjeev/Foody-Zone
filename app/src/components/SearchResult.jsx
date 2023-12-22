import { BASE_URL } from '../App'
import './SearchResult.css'


const SearchResult = ({data}) => {
  return (
    <div>
        <div className="foodcards-container">
            <div className="foodcards">
                {data?.map(({name, image, text, price})=>(
                    <div className="foodcard" key={name}>
                        <div className="food-image">
                            <img src={BASE_URL+ image} />
                         </div>
                         <div className="food-info">
                            <div className="info">
                                <h3> {name} </h3>
                                <p> {text} </p>
                            </div>
                            <div className="food-btn">
                                <button>  ${price.toFixed(2)} </button>
                            </div>
                         </div>
                    </div>

                ))}
                
            </div>
        </div>
        
    </div>
  )
}

export default SearchResult