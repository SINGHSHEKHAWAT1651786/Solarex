import { useDispatch, useSelector } from "react-redux";
import SolarItem from "./SolarItem";
import { clearCart } from "../utils/cartSlices";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
            <button className="bg-green-100 p-2 m-5" onClick={() => handleClearCart()}></button>
            <div className="flex">
                {cartItems.map(item => <SolarItem key={item.id} {...item[0]} />)}
            </div>
        </div>
    );
};
export default Cart;