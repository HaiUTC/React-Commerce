<<<<<<< HEAD
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
=======
import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.css";
import Header from "./component/header/Header";
import { auth, createUserProfile } from "./firebase/untils";
import CheckOut from "./pages/CheckOut/checkOut";
import HomePage from "./pages/HomePage/HomePage";
import ShopComponent from "./pages/shop/shop";
import SignInAndRegister from "./pages/SignIn-Register/SignInAndRegister";
import { userCurrent } from './redux/user/userAction';
import { selectCurrentUser } from "./redux/user/userSelector";

class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth)
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopComponent} />
          <Route path='/checkout' component={CheckOut}/>
          <Route exact path="/login" render={()=> this.props.currentUser ? <Redirect to='/' /> : <SignInAndRegister />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
    setCurrentUser : user => dispatch(userCurrent(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
