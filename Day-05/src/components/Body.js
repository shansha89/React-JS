import RestaurantCard from "./RestaurantCard";

const Body = () =>{
    return (
    <div className="body">
        <div className="search">Search :</div>
        <div className="res-container">
            <RestaurantCard name="Badam Milk" avgRatings="4.6" cusines="Indian" />
            <RestaurantCard name="Badam Milk" avgRatings="4.6" cusines="Indian"/>
            <RestaurantCard name="Badam Milk" avgRatings="4.6" cusines="Indian"/>
            <RestaurantCard name="Badam Milk" avgRatings="4.6" cusines="Indian"/>
        </div>
    </div>
    );
 }

 export default Body;