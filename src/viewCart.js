import { useSelector, useDispatch,  } from "react-redux";
import { useState } from "react";
import { removeItemFromCart } from './addToCart';
const ViewCart= () => {
  const dispatch= useDispatch()
  const [quantities, setQuantities] = useState({});

  const handleRemove=(item)=>{
       dispatch(removeItemFromCart(item))
  }
  

  const handleCheckout = () => {
    const updatedCartItems = cartItems.map((item) => {
   const updatedQuantity= itemQuantities[item.id] || item.quantity;

      return{title:item.title, quantity:updatedQuantity||1}
    });

    console.log("Checkout items:");
    console.log(JSON.stringify(updatedCartItems, null, 2));

  };


  const handleQuantityChange = (e, itemId) => {
    const { value } = e.target;
    setQuantities(prevQuantities => ({
        ...prevQuantities,
        [itemId]: parseInt(value) || 1,
    }));
};
  const cartItems = useSelector(state => state.cart.items);


  return (
    <div className="container">
      <button onClick={handleCheckout}>Checkout</button>
      <div className="row row-cols-md-4 g-4">
        {cartItems.map((item) => (
          <div key={item.id} className="col">
            <div className="card border-light" style={{ width: "18rem", height: "100%" }}>
              <img
                src={item.image}
                className="card-img-top"
                style={{ objectFit: "contain", height: "200px" }}
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "1rem" }}>{item.title}</h5>
                <p>${item.price}</p>

                <input type="number" className="form-control" defaultValue={item.quantity}   onChange={(e) => handleQuantityChange(e, item.id)} ></input>

                <button
                  style={{ backgroundColor: 'red', color: 'white', border: '0' }}
                  onClick={()=> handleRemove(item)}
                >
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ViewCart;
