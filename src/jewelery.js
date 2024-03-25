import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './jewelSlice';
import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addItemToCart } from './addToCart';
import ViewCart from './viewCart';
import { Link } from 'react-router-dom';

const MyComponent = ({ item }) => {
  const [itemQuantities, setItemQuantities] = useState({});
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const cartItems = useSelector((state) => state.cart.items);
    
 
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error}</div>;
    }


    
    const handleAddToCart = (item) => {
      const isInCart = cartItems.find((cartItem) => cartItem.id === item.id);
      if (!isInCart) {
          dispatch(addItemToCart({ item, quantity: itemQuantities[item.id] || 1 }));
      } else {
          alert("Item already added to cart");
      }
    };
    const handleQuantityChange = (e, itemId) => {
      const { value } = e.target;
      setItemQuantities((prevQuantities) => ({
          ...prevQuantities,
          [itemId]: parseInt(value) || 1,
      }));
    };
  


    return (
       <div  className="container"> 
   
     
   <div className="row row-cols-md-3 g-4">
          {data && data.map((item) => (
      <div key={item.id} className="col">
              <div className="card border-light" style={{ width: "18rem", height: "100%" }}>
              <img
                  src={item.image}
                  className="card-img-top"
                  alt="..."
                  style={{ objectFit: "contain", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h5 className="card-title" >{item.category}</h5>
                  <h5 className="card-title" >${item.price}</h5>
                  <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color:'grey' }}>
    {item.description}
</h5>


<div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ marginRight: 'auto' }}>
    Quantity:{' '}
    <input
                        type="number"
                        style={{ width: '40px', margin: '5px' }}
                        value={itemQuantities[item.id] || 1}
                        onChange={(e) => handleQuantityChange(e, item.id)}
                        min={1}
                      />
                    </div>
                    <Link to="/viewCart">
                      <button className="btn btn-sm mb-2" style={{ border: '1px solid black', backgroundColor: 'blue', color: 'white' }} onClick={() => handleAddToCart(item)}>
                        Add to Cart
                      </button>
                    </Link>
</div>
          

                </div>
              </div>
            </div>
          ))}
        </div>
   
     

</div>
    );
  };
  export default MyComponent;


  
