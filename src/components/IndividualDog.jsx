import react from 'react'
import {Link} from 'react-router-dom';
import './dogs.css'
import React, {useState, useEffect} from 'react';

const IndividualDog = ({dog}) => {
   
   

    return (
        <div  className="dogBox">

        <img className="profpic1" src={dog.img}
            alt={"The dog "}
            width="200vw"
            height="200vw">
        </img>

            <div className="doggieCard">
                <p>Name: {dog.name}</p>
                <p>Sex: {dog.sex}</p>
                <p>Age: {dog.age}</p>
                <p>Breed: {dog.breed}</p>
                <p>Present: {dog.present===true?"Yes":"No"}</p>
                <p>Chip number: {dog.chipNumber}</p>
                <p>Owner: {dog.owner.name}  {dog.owner.lastName} </p>
                <p>Mobile: {dog.owner.phoneNumber} </p>
            </div>

        </div>
    );
}

export default IndividualDog;