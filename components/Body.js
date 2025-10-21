import {moviesArr} from "./MovieCard.js";
import MovieCard from "./MovieCard.js"; 
const Body =() =>{
    return(
      <div className="movies">
        <h2>Now Showing</h2>
        
        <div className="movie-grid">
            {moviesArr.map((data)=>(
                <MovieCard key={data.id} data = {data}/>
            ))}
            
            
        </div>
    </div>

    );
};
export default Body; 