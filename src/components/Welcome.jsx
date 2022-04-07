import './welcomeScreen.css';
import react from 'react';
import {Link} from 'react-router-dom';




const Welcome = ({fetchDogData}) => {



    return (
        <div className="welcomeScreen">
            <img src={'https://www.barkaway.com/wp-content/uploads/2019/03/Bark-Away-Doggie-Daycare-Logo-Full-Color.png'} alt="LOGO" className="logo"/>

            <br></br>

           
            <Link to="/dogs">
                <button className="buttons" onClick={fetchDogData}>Dogs</button>
            </Link>

            <Link to="/owners">
                <button className="buttons" onClick={fetchDogData}>Dog Owners</button>
            </Link>
            
            <Link to="/presentdogs">
                <button className="buttons" onClick={fetchDogData}>Present Dogs</button>
            </Link>

            <Link to="/absentdogs">
                <button className="buttons" onClick={fetchDogData}>Absent Dogs</button>
            </Link>

           
         
        </div>
    );
}

export default Welcome; 
;