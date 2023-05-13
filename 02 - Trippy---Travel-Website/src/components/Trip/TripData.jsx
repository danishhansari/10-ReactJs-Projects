import './TripStyle.css';
const TripData = ({tripImg, tripCountry,tripAbout}) => {
    return ( 
        <div className="cards">
            <div className="trip-img">
                <img src={tripImg} alt="image" />
            </div>
            <h2>Trip in {tripCountry}</h2>
            <p>{tripAbout}</p>
        </div>
     );
}
 
export default TripData;