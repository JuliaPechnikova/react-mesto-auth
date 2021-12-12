import React from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import ProfilePage from './ProfilePage.js';
import Login from './Login.js';
import Register from './Register.js';
import ProtectedRoute from './ProtectedRoute.js';


function Main(props) {

  const [loggedIn, setLoggedIn] = React.useState(false);
  
  return (
    <BrowserRouter>
      <main className="content">
        <Routes>
          <Route path="/" element = {<ProtectedRoute
            path="/"
            loggedIn={loggedIn}
            component={ProfilePage}  
            onEditProfile = {props.onEditProfile}
            onAddPlace = {props.onAddPlace}
            onEditAvatar = {props.onEditAvatar}
            onCardClick = {props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
            cards={props.cards}
          />}>
          </Route>  
          <Route path="/sign-up" element = {<Register />}>
          </Route>
          <Route path="/sign-in" element = {<Login />}>
          </Route>
          <Route exact path="/" element = {loggedIn ? <Navigate to="/" /> : <Navigate to="/login" />}>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Main;
