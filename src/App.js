import React from 'react';
import HomePageComponent from './components/home/homePage';
import ContactsPageComponent from './components/contact/contactsPage';
import ContactPageComponent from './components/contact/contactPage';

import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
function App(){
    return (
<BrowserRouter>
        <div>
            <ul>
        <li><NavLink
  exact to="/"
  activeClassName="selected"
>Home</NavLink></li>
<li><NavLink
  exact to="/contacts"
  activeClassName="selected"
>Contacts</NavLink></li>
      </ul>
      <hr/>
            <Route exact path={"/"} component={HomePageComponent}></Route>
            <Route path="/contacts" component={ContactsPageComponent}></Route>
            <Route path="/contact/:id" component={ContactPageComponent}></Route>
        </div>
</BrowserRouter>
    );
}
export default App;