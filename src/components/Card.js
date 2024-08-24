import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./cardsStyle.module.css";

function Card({ card, onLike, onDelete }) {
  return (
    <div className={classes.card}>
      <Link to={`/card/${card.id}`} className={classes.cardContent}>
        <h3>{card.title}</h3>
        <p>{card.body.substring(0, 100)}...</p>
      </Link>
      <div className={classes.buttons}>
        <button className={classes.like} onClick={() => onLike(card.id)}>
          <FontAwesomeIcon icon={faHeart} color={card.liked ? "red" : "gray"} />
        </button>
        <button className={classes.delete} onClick={() => onDelete(card.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default Card;
