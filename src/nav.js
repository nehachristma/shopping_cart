import React from "react";

const Navbar=()=>{
    return(
       
        // <div className="header" style={{backgroundColor:'#EFEFEF ', marginTop:'0'}}>
        <div className="header" style={{  marginTop: '0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{textAlign:'center', fontFamily:'verdana'}}>My Store</h1>
        {/* <button className="btn btn-sm mb-2" style={{ position: 'fixed', top: '10px', right: '10px', color: 'black', border: '1px solid black' }}>View Cart</button> */}
        {/* <button className="btn btn-lg" style={{ position: 'fixed', top: '10px', right: '10px'}}>View Cart</button> */}
        {/* <button className="btn btn-primary mb-2" style={{ border: '1px solid black' }}>View Cart</button> */}

       
        </div>
   
    )
}

export default Navbar;