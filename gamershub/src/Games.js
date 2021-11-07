import {useState,useEffect} from "react";
import Aos from "aos";
import axios from "axios";
import "aos/dist/aos.css";
const Games = () => {
    const [data,SetData] = useState([]);
    const API = "05ab160c6c994129a1d7ac9bc2bdfcf7";
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    const Url = `https://api.rawg.io/api/games?key=${API}`;
    useEffect(() => {
        const fetchData = async(url) => {
            const request = await axios.get(url);
            SetData(request.data.results);
        }
        fetchData(Url);
    },[])
    return (
        <div>
            <div className="gamesContainer">
               <div className="gamesGlass">
               <div className="exploreGames">
                    <h2>E<span className="text-flicker-in-glow">x</span>plore Games</h2>
                </div>
                <div className="gamesContent">
                    <div className="games">
                        {data.map((game) => {
                            const {name,id,background_image,rating,reviews_count} = game;
                            console.log(rating.length)
                            return (
                                <>
                                <div data-aos="fade-up" className="gameContainer" key={id}>
                                    <img className="gameImg" src={background_image} alt="" />
                                    <div className="desc">
                                        <div className="gameName"><h3>{name}</h3></div>
                                        <div className="gameRating"><h4 className="rating" style={{color:"green"}}>{rating}</h4></div>
                                    </div>
                                    <div className="gamePlayTime">
                                        <div className="iconPlus"><i class="fas fa-plus">
                                                </i></div>
                                                <h3 className="reviews">{reviews_count}</h3>
                                    </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Games
