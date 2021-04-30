import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
// import image from '../../baltoro.jpg'
import image from '../../BAZ-logo.png'


const Header = ({cartLength}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <div>
                    <img src={image} height={50} width={50} style={{float:'right'}}/>
                    <NavLink style={{fontSize:"30px"}} className="navbar-brand" to="/">BAZ</NavLink>
                </div>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                                                                          aria-hidden="true" />Cart {cartLength ? `(${cartLength})`: ''}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


const mapStateToProps = (state) => {
  return {
      cartLength: state.shop.cart.length
  }
};

export default connect(mapStateToProps, null)(Header);


/*
*                         <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
* */