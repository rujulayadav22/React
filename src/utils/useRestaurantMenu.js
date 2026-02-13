import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import React from "react";

const useRestaurantMenu = (resId) => {
    
    const [resInfo, setresInfo] = useState(null);
    
    // fetch data //
    useEffect(() => {
        fetchData();
    }, [resId]);
      
    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setresInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu;
