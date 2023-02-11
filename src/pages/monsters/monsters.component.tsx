import SearchBox from "../../components/search-box/search-box.component";
import CardList from "../../components/card-list/card-list.component";
import { getData } from "../../utils/data.utils";
import React, { useEffect, useState,ChangeEvent } from 'react';
import './monsters.styles.scss';
export type Monster={
    id:string;
    name:string;
    email:string;
  };


const Monsters=()=>{
    const[searchField,setSearchField]=useState('');
    const[monsters,setMonsters]=useState<Monster[]>([]);
    const [filteredMonsters,setFilteredMonsters]=useState(monsters);
  
  useEffect(()=>{
    const fetchUsers=async()=>{
      const users=await getData<Array<Monster>>('http://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };
    fetchUsers();
  },[]);
  useEffect(()=>{
    const newFilteredMonsters=monsters.filter((monster)=>{
      
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchField]);
  
  const onSearchChange=(event:ChangeEvent<HTMLInputElement>):void=>{
    const searchFiealdString=event.target.value.toLocaleLowerCase();
    setSearchField(searchFiealdString);
  };
    return(
    <div className="App">
      <h1 className='app-title'>Monsters Show Cards</h1>

      <SearchBox
      
       className='monsters-search-box'
       onChangeHandler={onSearchChange}
       placeholder='search monsters'
       
      />
      <CardList monsters={filteredMonsters}/>
    </div>
    );
};


export default Monsters;