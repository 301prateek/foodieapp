import React from "react";
import "./Content.scss";
import { RestroData } from "../../Data/Data";
import Card from "../Card/Card";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content">
        <h3>Restaurants</h3>
        <div className="restuarants-list">
          {RestroData.map((item, index) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
