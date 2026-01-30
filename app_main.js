
 import React from "react";
import ReactDOM from "react-dom/client";

/**
 * HEADER
 * -logo
 * -nav items
 *
 * BODY
 * -search
 * -restaurant container
 * -restaurant card
 *
 * FOOTER
 * -copyrights
 * -links
 * -address
 * -contact
 */

const Search = () => {
  return (
    <div className="search-bar">
      <div className="location">
        <img
          className="location-icon"
          src="https://image2url.com/r2/default/images/1769363792219-d401756d-6ea8-498a-b442-8141d1b971d4.png"
          alt="location"
        />
        <span>Mumbai</span>
      </div>

      <div className="divider"></div>

      <div className="search-input">
        <img
          className="search-icon"
          src="https://image2url.com/r2/default/images/1769365713543-df2686b1-33cc-4a38-b591-61d9f6ec5710.png"
          alt="search"
        />
        <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://image2url.com/r2/default/images/1769350976013-158c30f7-f4d2-474f-99a9-f25439f40d16.png"
          alt="logo"
        />
      </div>

      <Search />

      <div className="nav">
        <div className="nav-items">
          <ul>
            <li>Login</li>
            <li>Sign Up</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Restaurantcard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId } = resData.info; 

  const imgUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    cloudinaryImageId;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img className="res-img" alt="res-logo" src={imgUrl} />
        <button className="add-btn">Add to Cart</button>
      </div>

      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>⭐ {resData.info.avgRating}</h4>
      <h4>{resData.info.locality}</h4>
    </div>
  );
};


 const resObj=  [{
                    "info": {
                      "id": "811336",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "e5f54df4ed8bac458b801ede76ee37d0",
                      "locality": "Hirachand Desai Road",
                      "areaName": "LBS MARG GHATKOPAR WEST",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "4961",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "2.9K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-beda717e-f79b-4ff2-a874-45756292bd34"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/la-pinoz-pizza-hirachand-desai-road-lbs-marg-ghatkopar-west-rest811336",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "32399",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/17fb1e67-86ac-4746-8853-27d9331db49f_32399.JPG",
                      "locality": "Kalina Artista",
                      "areaName": "Santacruz East",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.5,
                      "parentId": "630",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "41K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 03:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/mcdonalds-kalina-artista-santacruz-east-rest32399",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "31775",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/a0e147bc-94ef-4aad-b85f-fec710815dda_31775.jpg",
                      "locality": "The Capital Bandra Kurla Complex",
                      "areaName": "Bandra East",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "16K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 00:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/subway-the-capital-bandra-kurla-complex-bandra-east-rest31775",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "484594",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/4e3a6270-a879-484a-a317-d1b15f2e70ca_484594.JPG",
                      "locality": "Kurla West",
                      "areaName": "Kurla West",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.1,
                      "parentId": "547",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "6.4K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.5",
                          "ratingCount": "778"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/kfc-kurla-west-rest484594",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "535962",
                      "name": "Slyce Pizza",
                      "cloudinaryImageId": "4c899e0501bef7e4c6acd1fa7cc2c82b",
                      "locality": "Trade Center Building",
                      "areaName": "Bandra Kurla Complex",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Fast Food"
                      ],
                      "avgRating": 4.1,
                      "parentId": "321813",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "2.1K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/slyce-pizza-trade-center-building-bandra-kurla-complex-rest535962",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "47833",
                      "name": "Persian Darbar",
                      "cloudinaryImageId": "7aeb2bbff29d99d6e986240911ce0e71",
                      "locality": "Bandra Kurla Complex",
                      "areaName": "Bandra Kurla Complex",
                      "costForTwo": "₹1800 for two",
                      "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Mughlai",
                        "Kebabs",
                        "Seafood",
                        "Chinese",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "711",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "20K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹188"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "6.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/persian-darbar-bandra-kurla-complex-rest47833",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "82668",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/10db7001-287e-471a-af4f-a22bf7ca7243_82668.jpg",
                      "locality": "Kalina",
                      "areaName": "Santacruz East",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "2233",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "6.3K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹749",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/the-belgian-waffle-co-kalina-santacruz-east-rest82668",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "627565",
                      "name": "Sweet County Cake Shop",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/11/a85f6494-84da-47ea-93e8-4b3eb1676207_627565.jpg",
                      "locality": "Pant Nagar",
                      "areaName": "Ghatkopar East",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Bakery",
                        "Cakes & Pastries",
                        "Desserts",
                        "Cakes"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "441853",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "2.2K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-02-05 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "409"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/sweet-county-cake-shop-pant-nagar-ghatkopar-east-rest627565",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "391816",
                      "name": "Louis Burger",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/20/24b19dd3-c09d-4d3a-bff0-aa01684358b5_391816.JPG",
                      "locality": "Trade Centre",
                      "areaName": "Santacruz Bandra east",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        "Fast Food"
                      ],
                      "avgRating": 4.3,
                      "parentId": "22485",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "5.4K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/louis-burger-trade-centre-santacruz-bandra-east-rest391816",
                      "type": "WEBLINK"
                    }
                  },
                   {
                    "info": {
                      "id": "673363",
                      "name": "Bombay Sweet Shop",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/16/cea06d08-a12e-41e0-9ad9-a71cd876afb2_673363.JPG",
                      "locality": "Vidyanagari Marg",
                      "areaName": "Scruz Bandra East",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "Sweets",
                        "Desserts",
                        "Snacks"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "48883",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "778",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/bombay-sweet-shop-vidyanagari-marg-scruz-bandra-east-rest673363",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "376244",
                      "name": "Good Flippin' Burgers",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/9188584c-a779-4d87-bdab-7714c61285a7_376244.jpg",
                      "locality": "Bandra Kurla Complex",
                      "areaName": "Santacruz East",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        "Fast Food",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "parentId": "11748",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "3.7K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹195"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.7",
                          "ratingCount": "233"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/good-flippin-burgers-bandra-kurla-complex-santacruz-east-rest376244",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "324349",
                      "name": "Tossin Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/5d446132-93a8-4e7d-876d-14192afe2500_324349.jpg",
                      "locality": "Opposite Diamond Garden",
                      "areaName": "Chembur",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.5,
                      "parentId": "1778",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "4.9K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 5.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-35 mins",
                        "lastMileTravelString": "5.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹225 OFF",
                        "subHeader": "ABOVE ₹1099",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "590"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/tossin-pizza-opposite-diamond-garden-chembur-rest324349",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "395334",
                      "name": "McDonald's Gourmet Burger Collection",
                      "cloudinaryImageId": "txirbmikcfw5yijtcfs5",
                      "locality": "Kalina Artista",
                      "areaName": "Scruz Bandra East",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "parentId": "10761",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "367",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 03:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/mcdonalds-gourmet-burger-collection-kalina-artista-scruz-bandra-east-rest395334",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "681665",
                      "name": "LeanCrust Pizza- ThinCrust Experts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/8a64c9be-7a6b-4870-a69a-be53f8c9d0a2_681665.jpg",
                      "locality": "Gaurav Industrial Estate",
                      "areaName": "Kurla West",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "11216",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "248",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/leancrust-pizza-thincrust-experts-gaurav-industrial-estate-kurla-west-rest681665",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "740584",
                      "name": "Hola Pasta - Fresh Gourmet Pasta",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/23/697d31d3-812b-4f41-aff4-b6c53d73276d_740584.JPG",
                      "locality": "Gaurav Industrial Estate",
                      "areaName": "Kurla West",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "418135",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "134",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/hola-pasta-fresh-gourmet-pasta-gaurav-industrial-estate-kurla-west-rest740584",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "692689",
                      "name": "WeFit - Protein Bowls, Salads & Sandwiches",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/17502345-35fd-4c60-a2d8-7cb4453c5213_692689.jpg",
                      "locality": "Kurla",
                      "areaName": "Malad West",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Keto",
                        "Snacks"
                      ],
                      "avgRating": 4.7,
                      "parentId": "355285",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "380",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "High%20Protein/rx%20tag%205.png",
                            "description": "High Protein"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "High Protein",
                                  "imageId": "High%20Protein/rx%20tag%205.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/wefit-protein-bowls-salads-and-sandwiches-kurla-malad-west-rest692689",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "695754",
                      "name": "BOOM - Sub Style Sandwiches",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/10/66cf6c69-ebc8-42c7-b6f1-08f36770d060_695754.JPG",
                      "locality": "Kurla Andheri Road",
                      "areaName": "Kurla",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Snacks",
                        "Indian",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "parentId": "401169",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "198",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/boom-sub-style-sandwiches-andheri-road-kurla-rest695754",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "750450",
                      "name": "Daily Kitchen - Everyday Homely Meals",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/fa248b58-536b-49b2-9258-7a0476277cf0_750450.jpg",
                      "locality": "Gaurav Industrial Estate",
                      "areaName": "Kurla West",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Home Food",
                        "Indian",
                        "North Indian",
                        "Thalis"
                      ],
                      "avgRating": 4.7,
                      "parentId": "444382",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "466",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/daily-kitchen-everyday-homely-meals-gaurav-industrial-estate-kurla-west-rest750450",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "678580",
                      "name": "Mealful Rolls - India's Biggest Rolls",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/8/676e6b3a-1bb3-4331-bc5c-02b05e65e20a_678580.JPG",
                      "locality": "Gaurav Industrial Estate",
                      "areaName": "Kurla",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Fast Food",
                        "Snacks",
                        "North Indian",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "10390",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "215",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-30 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹64"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-534655b3-ee1c-46bb-8ec1-00800b6c53a0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/mealful-rolls-indias-biggest-rolls-gaurav-industrial-estate-kurla-rest678580",
                      "type": "WEBLINK"
                    }
                  }
                ]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Top brands for you</div>

      <div className="res-container">
        {resObj.map((restaurant) => (
          <Restaurantcard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<AppLayout />);