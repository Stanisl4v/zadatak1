import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



// const searchByCity = (event: { target: { value: string; }; }) => {
//   festivals.filter(festival => {
//     festival.city.toLowerCase().includes(event.target.value)
//   })
// }


const festivals = [
  {
      name: "EXIT", 
      month: "July", 
      city: "Novi Sad", 
      country: "Serbia"
  },
  {
      name: "Sziget", 
      month: "August", 
      city: "Budapest", 
      country: "Hungary"
  },
  {
      name: "New Orelans Jazz & Heritage Festivals", 
      month: "April", 
      city: "New Orleans", 
      country: "USA"
  },
  {
      name: "Tomorrowland", 
      month: "July", 
      city: "Boom", 
      country: "Belgium"
  },
  ]


function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return ( 
  <div>
    <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
    {festivals.filter((val) => {
      if(searchTerm == "") {
        return val
      } else if(val.city.toLocaleLowerCase().includes(searchTerm.toLowerCase())) {
        return val
      }
    })
      .map((val, key) => {
      return ( 
      <div key={key}>
        <p>{val.city}</p>
      </div>
      );
    })}
  </div>
  )
}


export default App;
