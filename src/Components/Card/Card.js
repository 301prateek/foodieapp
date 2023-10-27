import React from "react";
import "./Card.scss";
import Ratings from "./Ratings";

const Card = (props) => {
  const { name, image, cuisines, priceForTwo, ratings, offer } = props.item;
  console.log(props);
  return (
    <div className="card-container">
      <div className="restro-image">
        {offer ? <div className="discount"></div> : null}
        {offer ? <span className="offer">{`${offer}% off`}</span> : null}
        <img src={image} />
      </div>
      <div className="card-bottom">
        <div className="restro-header">
          <div className="restro-name">{name}</div>
          <div className="ratings">
            <Ratings ratings={ratings} />
          </div>
        </div>

        <div className="footer-design">
          <div className="cuisines">
            <span>{cuisines}</span>
          </div>
          <div className="price">&#8377;{priceForTwo} for two</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
