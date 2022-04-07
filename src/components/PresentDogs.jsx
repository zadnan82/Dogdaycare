import react from 'react'
import { Link } from 'react-router-dom';
import './dogs.css'
import React, { useState, useEffect } from 'react';
import DogCard from './DogCard';

const PresentDogs = ({ daycareData, setEachDog }) => {
   

    return (
        <div className="cardContainer">

            <div className="dog-info">
                {daycareData && daycareData.map((member, index) => {

                    if (member.present == true) {
                        return (
                            <div className="dog" key={index} onClick={() => { setEachDog(member) }}>
                                <Link to="/individualdog">
                                    <DogCard dog={member} />
                                </Link>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default PresentDogs;