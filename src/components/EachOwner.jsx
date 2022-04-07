import React, {useState, useEffect} from 'react';
import './owners.css'

const EachOwner = ({ owner}) => {


    return (
        <div >
            
            <div className="ownerInfo">
                <p>{owner.name} {owner.lastName} </p>
                <br />
                <p>{owner.phoneNumber}</p>

            </div>

        </div>
    );
}

export default EachOwner;