import { useEffect } from "react";
import { MENU_API } from "./constants";

const useMenuItems = (resId) => {
  const [resItem, setResItem] = useState(null);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResItem(json);
  };

  return resItem;
};

export default useMenuItems;
