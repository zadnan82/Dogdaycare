import react from 'react'
import React, {useState, useEffect} from 'react';
import './owners.css';
import {Link} from 'react-router-dom';
import DogCard from './DogCard';

const Dogs = ({ daycareData, setEachDog}) => {
  
  
    return (
        <div className='cardContainer'>

                <div >
                    {daycareData && daycareData.map((member, index) => {
                        
                        return (
                            <div key={index}  onClick={() => {setEachDog(member)}}>
                                <Link to="/individualdog">
                                <DogCard dog={member} />
                                </Link>
                            </div>
                        );
                
                    })}
                </div>

        </div>
    );
}

export default Dogs;
