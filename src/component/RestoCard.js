import { CDN_URL } from "../utils/constants";

const RestoCard = (props) => {
  const { resInfo } = props;
  console.log(resInfo);
  const { name, cuisines, avgRating, sla, cloudinaryImageId, feeDetails } =
    resInfo?.info;
  {
    /*
     * *This is Optional chaining means if suppose object not having particular value then it will not give an error
     */
  }

  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>Cost {feeDetails.totalFee / 10} ₹</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>Delivery Time {sla.deliveryTime} Mins</h4>
      <h5>{avgRating} Stars</h5>
    </div>
  );
};

export default RestoCard;
