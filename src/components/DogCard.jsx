import react from 'react';
import React, {useState, useEffect} from 'react';
import './dogs.css'

const DogCard = ({ dog}) => {

   
    return (
        <div >
        
            <div className='dogInfo'>
           
            <img className='profpic' src={dog.img}
                alt={"The dog"}
                width="60vw"
                height="60vw">
            </img>
        
        
            <p>{dog.name} </p>  
               
            <p></p> {dog.present===true?"Present":"Absent"}
            </div>

        </div>
    );
}

export default DogCard;