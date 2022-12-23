import "./Card.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = (props) => {
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;

  const [video, setVideo] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const youtubeUrl = `https://www.youtube.com/embed/`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseRemoved =() => {
    setIsHovered(false);
  }

  const fetchURL = async () => {
    try {
      const response = await axios.get(`/movie/${props.id}/videos`);
    if(response.data.videos.results.length > 0) {
      setVideo(response.data.videos.results[0].key);
    }
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect( () => {
    fetchURL();
  }, []);
  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseRemoved}
    >
    {!isHovered ? (
      <img className="cardPoster" src={imageUrl} alt="poster" />
    ) : (  <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
        width="100%"
        height="100%"
        frameBorder="0"
        src = {`${youtubeUrl}${video}`}
      ></iframe>)}
     
    
    </div>
  );
};

export default Card;
