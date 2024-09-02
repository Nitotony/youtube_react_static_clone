

import "./card.css"
const Card=(props)=>{
    const {img,title,creator,time}=props;
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-img">
            <img src={img} alt="" />
          </div>

          <h5 className="card-title">{title}</h5>
          <p>{creator}</p>
          <p>{time} years ago</p>
        </div>
      </div>
    );
}

export default Card;
