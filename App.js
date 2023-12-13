import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

/*
Header
 --Logo
 --Nav Items
Body
--Search
--RestaurantContainer
  --RestaurantCard
Footer
--Copyright
--Address
--Contact 
*/

const Header = () => {
  return (
    <div className="header">
      <img src="https://icons.iconarchive.com/icons/sonya/swarm/256/Fast-Food-icon.png" />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <img src="https://png.pngtree.com/png-vector/20230412/ourmid/pngtree-food-cart-line-icon-vector-png-image_6701298.png" />
        </ul>
      </div>
    </div>
  );
};

const RestoCard = (props) => {
  const { resInfo } = props;
  console.log(resInfo);
  const { name, cuisines, avgRating, sla, cloudinaryImageId, feeDetails } =
    resInfo?.info;
  {
    /* This is Optional chaining means if suppose object not having particular value then it will not give an error */
  }

  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>Cost {feeDetails.totalFee / 10} ₹</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>Delivery Time {sla.deliveryTime} Mins</h4>
      <h5>{avgRating} Stars</h5>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "203925",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Elprocity Square",
      areaName: "Chinchwad",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "203925",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4300,
      },
      parentId: "166",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-14 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c7d841d8-23ef-4579-9cb6-9bdaf9b21cad",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-elprocity-square-chinchwad-pune-203925",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "310857",
      name: "McDonald's",
      cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
      locality: "Elpro City Square Mall",
      areaName: "Chinchwad",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "310857",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4300,
      },
      parentId: "630",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-13 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c7d841d8-23ef-4579-9cb6-9bdaf9b21cad",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-elpro-city-square-mall-chinchwad-pune-310857",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "235625",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Elpro City Square",
      areaName: "Pimpri",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "235625",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5000,
      },
      parentId: "547",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-14 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c7d841d8-23ef-4579-9cb6-9bdaf9b21cad",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-elpro-city-square-pimpri-pune-235625",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "24435",
      name: "Domino's Pizza",
      cloudinaryImageId: "sskjrrikponrfors6kud",
      locality: "Rameera Tower",
      areaName: "Nigdi",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "24435",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "2456",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-14 02:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c7d841d8-23ef-4579-9cb6-9bdaf9b21cad",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-rameera-tower-nigdi-pune-24435",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "40181",
      name: "Savali",
      cloudinaryImageId: "lbye6vascq2ggicljkkw",
      locality: "Sector 24",
      areaName: "Nigdi",
      costForTwo: "₹300 for two",
      cuisines: [
        "South Indian",
        "North Indian",
        "Chinese",
        "Biryani",
        "Juices",
      ],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "40181",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "7882",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c7d841d8-23ef-4579-9cb6-9bdaf9b21cad",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/savali-sector-24-nigdi-pune-40181",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "6052",
      name: "Mazzedar",
      cloudinaryImageId: "hmrj06hczmliwslhlgja",
      locality: "Bhel Chowk",
      areaName: "Nigdi",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Biryani", "Chinese", "Beverages"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "6052",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "134105",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-13 16:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c7d841d8-23ef-4579-9cb6-9bdaf9b21cad",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mazzedar-bhel-chowk-nigdi-pune-6052",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "36036",
      name: "Vedas",
      cloudinaryImageId: "srbulvz4shikgti3ja2p",
      locality: "Akurdi",
      areaName: "Akurdi",
      costForTwo: "₹550 for two",
      cuisines: ["North Indian", "Chinese", "Mughlai"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "36036",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4200,
      },
      parentId: "10241",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-13 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c7d841d8-23ef-4579-9cb6-9bdaf9b21cad",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/vedas-akurdi-pune-36036",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "391953",
      name: "Shreyas Restaurant",
      cloudinaryImageId: "g7osbrresbtxso2i3ncf",
      locality: "Gurudwara Colony",
      areaName: "Nigdi",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Indian", "Biryani"],
      avgRating: 3.3,
      feeDetails: {
        restaurantId: "391953",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "186121",
      avgRatingString: "3.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-14 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c7d841d8-23ef-4579-9cb6-9bdaf9b21cad",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/shreyas-restaurant-gurudwara-colony-nigdi-pune-391953",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "26893",
      name: "Gayatrree",
      cloudinaryImageId: "ax6sytg7zbfy1toe7rwj",
      locality: "Sindhu Nagar",
      areaName: "Nigdi",
      costForTwo: "₹350 for two",
      cuisines: ["North Indian"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "26893",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "86793",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-13 16:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c7d841d8-23ef-4579-9cb6-9bdaf9b21cad",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gayatrree-sindhu-nagar-nigdi-pune-26893",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body">
      {/* This is JSX comment */}
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestoCard key={restaurant.info.id} resInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
