import SectionProductSushi from "../SectionProduct/SectionProductSushi.js";
import SectionProductSpicySushi from "../SectionProduct/SectionProductSpicySushi.js";
import SectionProductBakedSushi from "../SectionProduct/SectionProductBakedSushi.js";
import { addItem } from "../../store/cartSlice.js";
import { useDispatch } from 'react-redux';


function SectionProduct() {
  
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Добавление товара в корзину
  };

  return (

    <>
      <SectionProductSushi handleAddToCart={handleAddToCart} />

      <SectionProductSpicySushi handleAddToCart={handleAddToCart} />

      <SectionProductBakedSushi handleAddToCart={handleAddToCart} />
    </>
  );
}

export default SectionProduct;