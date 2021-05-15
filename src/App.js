import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { AppContainer } from "./App-Styled";
import Header from "./component/header/Header";
import CheckOut from "./pages/CheckOut/checkOut";
import HomePage from "./pages/HomePage/HomePage";
import ShopComponent from "./pages/shop/shop";
import SignInAndRegisterContainerMain from "./pages/SignIn-Register/SignInAndRegisterContainerMain";
import { checkUserSession } from "./redux/user/userAction";
import { selectCurrentUser } from "./redux/user/userSelector";
const App = ({checkUserSession,currentUser}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <AppContainer>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopComponent} />
        <Route path="/checkout" component={CheckOut} />
        <Route
          exact
          path="/login"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndRegisterContainerMain />
            )
          }
        />
      </Switch>
    </AppContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
