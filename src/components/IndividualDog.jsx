import react from 'react'
import {Link} from 'react-router-dom';
import './dogs.css'
import React, {useState, useEffect} from 'react';

const IndividualDog = ({dog}) => {
   
    let content = null;
    if(dog != null) {
        content = 
            <div  className="flexi">

            <img className="profpic1" src={dog.img}
                alt={"The dog " , dog.name , "img goes here"}
                width="200vw"
                height="200vw">
            </img>

                <div className="dogInfo2">
                    <p>Name: {dog.name}</p>
                    <p>Sex: {dog.sex}</p>
                    <p>Age: {dog.age}</p>
                    <p>Breed: {dog.breed}</p>
                    <p>Present: {dog.present===true?"Yes":"No"}</p>
                    <p>Chip number: {dog.chipNumber}</p>
                </div>

            </div>
        
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default IndividualDog;