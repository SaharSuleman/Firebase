import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cart from './Cart'
import Product from './Product'
import Home from './Home';
import Register from './Register';
function Main() {
    return (


        <Router>
            <nav>
            <Link className='link' to='/'>Home</Link><br />
            <Link className='link' to='/register'>Register</Link><br />
            <Link className='link' to='/cart'>Cart</Link><br />
            <Link className='link' to='/product'>Product</Link><br />
            </nav>
              
            <Switch>
            <Route path='/register'><Register /></Route>
            <Route path='/product'><Product /></Route>
            <Route path='/cart'><Cart /></Route>
            <Route path='/'><Home /></Route>
            </Switch>

        </Router>
    )
}

export default Main