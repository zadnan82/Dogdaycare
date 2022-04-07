import react from 'react';
import React, {useState, useEffect} from 'react';
import './owners.css'
import IndividualDog from './IndividualDog'
import {Link} from 'react-router-dom';

const EachOwner = ({dogList, owner, index, setEachDog}) => {


    return (
        <div className="owner-card-container">
            
            <div className="ownerInfo">
                <p>{owner.name} {owner.lastName} </p>
                <br />
                <p>{owner.phoneNumber}</p>

            </div>

        </div>
    );
}

export default EachOwner;