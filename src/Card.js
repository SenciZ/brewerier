import React from 'react';

function Card(props) {
  return (
    <div className="breweryCard" key={index}><h3>{item.name}</h3><p>{item.street}</p><p>{item.city}</p><p>{item.state}</p></div>
  );
}

export default Card;
