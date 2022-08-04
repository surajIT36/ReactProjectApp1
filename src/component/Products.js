import React from "react";
import { Link,Outlet} from "react-router-dom";

const styleProduct ={ 
        textDecoration: "none",
        padding: "8px",
}

const Products = () => {
    return(
        <>
             <div style={{padding:'8px'}}>
            <input type="search" name="search" id="Search" placeholder="Search Products" />
        </div>
        <nav className="nav" style={{padding:'0px'}}>
            <Link to='featured'  style={styleProduct} >featured</Link>
            <Link to='new'  style={styleProduct} >new</Link>
        </nav>
        <Outlet />
        </>
       
        
    );
};

export default Products;