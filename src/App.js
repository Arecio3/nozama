import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Checkout from './component/checkout/Checkout';
import Login from './component/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Context/StateProvider';
import Payment from './component/payment/Payment';
import dotenv from 'dotenv'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51JDxJLCQ9n0Z8ZFpY3urQKcs3Tu8XX1EcqGy7gZt1uFakLfoaaf9QJ2UrF2g9zrSWgjrWI0hslcu2ZI58Xe1qmUB00UzTjJ8jC')

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // [] = means it will only run once when app component loads
    // adds a listener to listen for what user logged in/out
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is ", authUser)

      if (authUser) {
        // The user just logged in/ was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <Switch>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
