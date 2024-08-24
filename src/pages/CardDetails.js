import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCardContext } from "../components/CardContext";
import classes from "./pagesStyle.module.css";

function CardDetails() {
  const { cards } = useCardContext();
  const { id } = useParams();
  const card = cards.find((c) => c.id === parseInt(id));

  if (!card) {
    return <p>Card not found</p>;
  }

  return (
    <div className={classes.details}>
      <h2>{card.title}</h2>
      <p>{card.body}</p>
      <Link to="/">
        <button>Back to cards</button>
      </Link>
    </div>
  );
}

export default CardDetails;
