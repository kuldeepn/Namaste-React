import { CDN_URL } from "../utils/constants";
import Star from "../utils/icons/Star";


const RestoCard = (props) => {
  const { resInfo } = props;

  const { name, cuisines, avgRating, sla, cloudinaryImageId, feeDetails } =
    resInfo?.info;
  {
    /*
     * *This is Optional chaining means if suppose object not having particular value then it will not give an error
     */
  }

  return (
    <div className="m-4 p-4 w-[220px] h-[320px] bg-slate-200 rounded-xl shadow-2xl">
      <img className="p-[5px] w-[250px] h-[150px] rounded-xl" src={CDN_URL + cloudinaryImageId} />
      <h2 className="text-lg font-bold py-1 font-roboto">{name}</h2>
      {/* <h3>Cost {feeDetails.totalFee / 10} ₹</h3> */}
      <h5 className="flex pb-2" ><Star/>
      <div className="px-2 font-roboto font-bold">{avgRating} . {sla.deliveryTime} Mins</div>
      </h5>
      <h3 className="font-roboto">{cuisines.join(", ")}</h3>
      
      
    </div>
  );
};

export default RestoCard;
