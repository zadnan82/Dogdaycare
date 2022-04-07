import react from 'react'
import React, {useState, useEffect} from 'react';
import EachDog from './DogList';
import './owners.css'
import EachOwner from './EachOwner'
import {Link} from 'react-router-dom';

const Owners = ({daycareData, setEachDog}) => {
    const [clickedIndex, setCklickedIndex] = useState(null);



    return (
        <div className="cardContainer">

                <div className="dog-info">
                    {daycareData && daycareData.map((member, index) => {
                        return (
                            <div className="dog" key={index} onClick={() => {setEachDog(member) ; console.log('diggie set: ' , daycareData[1])}}>
                                <Link to="/individualdog">
                                <EachOwner
                                setIndex={() => setCklickedIndex(index)}
                                index={index}
                                dogList={daycareData}
                                owner={member.owner} />
                                </Link>
                            </div>
                        );
                
                    })}
                </div>

        </div>
    );
}




export default Owners;
