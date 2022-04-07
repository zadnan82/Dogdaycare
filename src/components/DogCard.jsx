import react from 'react';
import React, {useState, useEffect} from 'react';
import './dogs.css'
import IndivudualDog from './IndividualDog'
import {Link} from 'react-router-dom';

const DogCard = ({ setEachDog, index, dogList, dog}) => {

   
    return (
        <div >
        
            <div className="dogInfo">
           
            <img className="profpic" src={dog.img}
                alt={"The dog " , dog.name , "img goes here"}
                width="50vw"
                height="50vw">
            </img>
        
        
            <p>{dog.name} </p>  
               
            <p></p> {dog.present===true?"Present":"Absent"}
            </div>

        </div>
    )
}

export default DogCard;