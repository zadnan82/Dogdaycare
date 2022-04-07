import react from 'react'
import {Link} from 'react-router-dom';
import './dogs.css'
import React, {useState, useEffect} from 'react';
import DogCard from './DogCard';

const AbsentDogs = ({daycareData, setEachDog}) => {
    const [clickedIndex, setCklickedIndex] = useState(null);
    let content = null;
     
    {daycareData && daycareData.map((dogs, index) => {

       
      
       if (dogs.present == true){

        content = 
            
        <div className="cardContainer">

        <div className="dog-info">
     
               
                    <div className="dog" key={index} onClick={() => {setEachDog(dogs)}}>
                        <Link to="/individualdog">
                        <DogCard
                        setIndex={() => setCklickedIndex(index)}
                        index={index}
                        dogList={daycareData}
                        dog={dogs} />
                        </Link>
                    </div>
                
        
          
        </div>

</div>

   
       }
})}



    return (
        <div>
            {content}
        </div>
    );
}

export default AbsentDogs;