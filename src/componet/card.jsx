import PropTypes from "prop-types";
import { IoIosFootball } from "react-icons/io";
export function Card(props) {
  return (
    <div className="container">
      <div className="card" onClick={() => window.open(props.matchviewUrl)}>
 
        <div className="imgDiv">
          <img src={props.thumbnail} className="" alt="..." />
        </div>
        <div className="card-body">
          <h4 className="competitionName">{props.competition}</h4>
          <h5 className="match">{props.title}</h5>
          <button className="btn" onClick={()=> window.open(props.competitionUrl)}>info<IoIosFootball /></button>

        </div>

      </div>
    </div>
  );
}
Card.prototype = {
  competitionUrl: PropTypes.string, 
  matchviewUrl: PropTypes.string,
  thumbnail: PropTypes.string,
  competition: PropTypes.string,
  title: PropTypes.string,
};
