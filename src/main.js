import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Quizzes from './components/quizzes';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={null}></Route>
      <Route exact path='/signup' component={Quizzes}></Route>
    </Routes>
  );
}

export default Main;