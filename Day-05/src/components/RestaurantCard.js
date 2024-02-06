const RestaurantCard = (props) =>{
    console.log(props)
    const {name, avgRatings,cusines} = props
    return (
        <div>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ygwskis4ogmqgafbusb1"
            alt="" />
            <p>{name}</p>
            <p>{avgRatings}</p>
            <p>{cusines}</p>
        </div>
    )
 }

 export default RestaurantCard;
