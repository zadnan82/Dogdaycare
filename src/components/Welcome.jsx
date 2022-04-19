import './welcome.css';
import react from 'react';
import { Link } from 'react-router-dom';




const Welcome = ({ fetchDogData }) => {



    return (
        <div className='welcomeScreen'>
            <img src={'https://www.barkaway.com/wp-content/uploads/2019/03/Bark-Away-Doggie-Daycare-Logo-Full-Color.png'} alt="LOGO" className='logo' />

            <br></br>


            <Link to="/dogs">
                <button className='buttons' onClick={fetchDogData}>Dogs</button>
            </Link>

            <Link to="/owners">
                <button className='buttons' onClick={fetchDogData}>Dog Owners</button>
            </Link>

            <Link to="/presentdogs">
                <button className='buttons' onClick={fetchDogData}>Present Dogs</button>
            </Link>

            <Link to="/absentdogs">
                <button className='buttons' onClick={fetchDogData}>Absent Dogs</button>
            </Link>

            <div className='wel'>

                <h2> Welcome to  Bark Away Doggie DayCare </h2>

                <div className='boo'>

                    <img src={'https://img.icons8.com/doodle/344/dog.png'} alt="GOD" className='box' />

                </div>

                <div className='par'>
                    <p> Thank you for choosing  Doggie Day Care for your
                        active dog’s well-being and happiness. We hope that we will have a long
                        lasting and healthy relationship with you and your pet. </p>
                </div>





                <div className='boo1'>

                    <img src={'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-dog-in-the-wild-flaticons-lineal-color-flat-icons-2.png'} alt="GOD" className='box1' />

                </div>





            </div>

        </div>
    );
}

export default Welcome;
;