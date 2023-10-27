import StarIcon from "../../assets/white-star-icon-13226.png";
import "./Ratings.scss";

const Ratings = (props) => {
  return (
    <div className="ratings-container">
      <div>{props.ratings ? props.ratings : "-"}</div>
      <div>
        <img src={StarIcon} />
      </div>
    </div>
  );
};

export default Ratings;
