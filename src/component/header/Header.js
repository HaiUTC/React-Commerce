import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/untils";
import Cart from "../cart/cart";
import CartDropDown from "../cart-dropdown/cartDropDown";
import "./Header.scss";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="Header">
      <Link className="logo" to="">
        <svg
          className="pre-logo-svg"
          height="60px"
          width="60px"
          fill="#111"
          viewBox="0 0 69 32"
        >
          <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
        </svg>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            LOGIN
          </Link>
        )}
        <Cart />
      </div>
      {hidden ? <CartDropDown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps, null)(Header);
