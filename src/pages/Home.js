import React, { useEffect, useState } from "react";
import { useCardContext } from "../components/CardContext";
import CardList from "../components/CardList";
import classes from "./pagesStyle.module.css";

function Home() {
  const { cards, setCards } = useCardContext();
  const [showLiked, setShowLiked] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        const formattedCards = data.map((card) => ({
          id: card.id,
          title: card.title,
          body: card.body,
          liked: false,
        }));
        setCards(formattedCards);
      });
  }, [setCards]);

  const handleLike = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, liked: !card.liked } : card
      )
    );
  };

  const handleDelete = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const filteredCards = showLiked ? cards.filter((card) => card.liked) : cards;

  return (
    <div className={classes.main}>
      <button
        className={classes.mainButton}
        onClick={() => setShowLiked(!showLiked)}
      >
        {showLiked ? "Show All" : "Show Liked"}
      </button>
      <CardList
        cards={filteredCards}
        onLike={handleLike}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Home;
