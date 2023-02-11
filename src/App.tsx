import React, { useEffect, useState,ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { getData } from './utils/data.utils';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import { Routes , Route } from 'react-router-dom';
import Navigation from './pages/navigation/navigation.component';
import Monsters from './pages/monsters/monsters.component';
import TestView from './pages/test-view/test-view.component';
import Home from './pages/home/home.component';


const App=()=> {
  


  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='test-view' element={<TestView/>}/>
      <Route path='monsters' element={<Monsters/>}/>
      </Route>
    </Routes>
  );
  
}

export default App;
