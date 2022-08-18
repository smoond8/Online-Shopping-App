import React from 'react';
import './NavBar.css'


const NavBar=()=>{
    return(
        
        <React.Fragment>
    <div className="nav">
    <button className="all" id="all">Home</button>
        <button className="electronic" id="electronic">electronics</button>
        <button className="clothes" id="clothes" >clothes</button>
        <button className="jewelery" id="jewelery">jewelery</button>
        
    
    </div>
    <div className="nav-right nav">
        <ul><li><i className="fa-solid fa-cart-shopping icon" style={{fontSize:21,cursor:"pointer",color:"white",float:"right"}}></i></li></ul>
    </div>
    </React.Fragment>
    )
}
export default NavBar;
