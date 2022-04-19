import react from 'react'
import React, {useState, useEffect} from 'react';
import './owners.css'
import EachOwner from './EachOwner'
import {Link} from 'react-router-dom';

const Owners = ({daycareData, setEachDog}) => {
   


    return (
        <div className='cardContainer'>

                <div >
                    {daycareData && daycareData.map((member, index) => {
                        return (
                            <div key={index} onClick={() => {setEachDog(member) }}>
                                <Link to="/individualdog">
                                <EachOwner owner={member.owner} />
                                </Link>
                            </div>
                        );
                
                    })}
                </div>

        </div>
    );
}




export default Owners;