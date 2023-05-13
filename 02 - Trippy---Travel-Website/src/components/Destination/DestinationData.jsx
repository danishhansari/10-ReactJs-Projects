import Mountain1 from '../../assets/img/1.jpg';
import Mountain2 from '../../assets/img/2.jpg';
import Mountain3 from '../../assets/img/3.jpg';
import Mountain4 from '../../assets/img/4.jpg';
import "./DestinationStyle.css";
const DestinationData = ({title, description,img1,img2,DesClass}) => {
  return (
    <div className={DesClass}>
      <div className="desc-text">
        <h2>{title}</h2>
        <p>
         {description}
        </p>
      </div>
      <div className="image">
        <img src={img1} alt="img" />
        <img src={img2} alt="img" />
      </div>
    </div>
  );
};
export default DestinationData;
