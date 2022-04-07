import react from 'react'
import React, {useState, useEffect} from 'react';
import './owners.css';
import {Link} from 'react-router-dom';
import DogCard from './DogCard';

const Dogs = ({ daycareData, setEachDog}) => {
    const [clickedIndex, setClickedIndex] = useState(null);
  
   
   
  
    return (
        <div className="cardContainer">

                <div className="dog-info">
                    {daycareData && daycareData.map((member, index) => {
                        
                        return (
                            <div className="dog" key={index} onClick={() => {setEachDog(member)}}>
                                <Link to="/individualdog">
                                <DogCard
                                dog={member} />
                                </Link>
                            </div>
                        );
                
                    })}
                </div>

        </div>
    );
}

export default Dogs;
