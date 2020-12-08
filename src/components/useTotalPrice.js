import { useState } from "react";
const useTotalPrice = () => {
  const [price, setPrice] = useState(1010);
  return { price, setPrice };
};

export default useTotalPrice;
