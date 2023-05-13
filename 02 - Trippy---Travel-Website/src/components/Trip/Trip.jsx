import TripData from './TripData';
import './TripStyle.css'
import img1 from '../../assets/img/4.jpg'
import img2 from '../../assets/img/5.jpg'
import img3 from '../../assets/img/6.jpg'
const Trip = () => {
    return ( 
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>

            <div className="trip-card">
                <TripData
                tripImg={img1}
                tripCountry={"Indonesia"}
                tripAbout={"Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceanic between the indian and Pacific oceans.It consists at over 17,000 islands, including Sumatra, Java, Sulawesi, and ports of Borneo and New Gulnea."} 
                />
                <TripData 
                tripImg={img2}
                tripCountry={"Malaysia"}
                tripAbout={"Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island at Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."}
                />
                <TripData 
                tripImg={img3}
                tripCountry={"France"}
                tripAbout={"France in Western Europe, encompasses medieval cities, alphine villages and Mediterranean beaches Paris. Its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Effel Tower"}
                />
            </div>
        </div>
     );
}
 
export default Trip;