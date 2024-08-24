import React from "react";
import Card from "./Card";
import classes from "./cardsStyle.module.css";

function CardList({ cards, onLike, onDelete }) {
  return (
    <div className={classes.cardList}>
      {cards.map((card) => (
        <Card key={card.id} card={card} onLike={onLike} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default CardList;
