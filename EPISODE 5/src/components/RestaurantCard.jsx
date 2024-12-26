
const RestaurantCard = (props) => {
 
    const {resData} = props
    const{
      name,costForTwoString,deliveryTime,id,avgRating
    } = resData.data
    //here we are using custom cloudinary image
    const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.data.cloudinaryImageId}`;
      return(<div className="res-cards">
          <div className="res-logo">
            {/* //images will be fetched from the imgUrl */}
              <img className="img-1"src={imgUrl}/>
          </div>
          <h3>{name}</h3>
           <h4>{costForTwoString}</h4>
           <h4>{avgRating}</h4>
          <h5>{deliveryTime} minutes</h5>
      </div>)
  }

  export default RestaurantCard