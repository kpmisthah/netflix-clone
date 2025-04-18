import "./TitleCards.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface TitleCardsProps {
  title?: string;
  category?: string;
}
interface Movie {
  original_title: string;
  backdrop_path: string;
  id: number;
}
const TitleCards = ({ title, category }: TitleCardsProps) => {
  const [apiData, setApiData] = useState<Movie[]>([]);

  const cardsRef = useRef<HTMLDivElement>(null);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODk5ODcxOWEyMzk0Mjc0N2M0NTAxMjczYjRkZWM4ZSIsIm5iZiI6MTcyNjAxNTUxNS42NTY5OTk4LCJzdWIiOiI2NmUwZTgxYjAwMDAwMDAwMDA0YzgwMWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ucJVEs9s6e7UiXjkkkFeKxJyrs3M8vtp3EYwr4dE1NA",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    const refCurrent = cardsRef.current;
    if (!refCurrent) return;
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      refCurrent.scrollLeft += event.deltaY;
    };
    refCurrent.addEventListener("wheel", handleWheel);
    return () => refCurrent.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
