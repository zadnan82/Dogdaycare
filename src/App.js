import react, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Owners from './components/Owners';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Dogs from './components/Dogs';
import IndividualDog from './components/IndividualDog';
import AbsentDogs from './components/AbsentDogs';
import PresentDogs from './components/PresentDogs';

function App() {




  const [daycareData, setDaycareData] = useState(null);
  const [eachDog, setEachDog] = useState(null);

  const fetchDogData = async () => {
    fetch('https://api.jsonbin.io/b/62457a721a1b610f08488545')
      .then(response => response.json())
      .then((data) => {

        setDaycareData(data);

       

      })
  }




  return (
    <div className='App'>
      <header className='App-header'>
        <main >
          <Router>



            <Routes>

              <Route exact path="/" element={
                <Welcome fetchDogData={() => fetchDogData()} />}  />


              <Route path="/dogs" element={
                <Dogs daycareData={daycareData} setEachDog={setEachDog} />} />

              <Route path="/owners" element={
                <Owners daycareData={daycareData} setEachDog={setEachDog} />} />


              <Route path="/presentdogs" element={
                <PresentDogs daycareData={daycareData} setEachDog={setEachDog} />} />

              <Route path="/absentdogs" element={
                <AbsentDogs daycareData={daycareData} setEachDog={setEachDog} />} />


              <Route path="/individualdog" element={
                <IndividualDog dog={eachDog} />} />



            </Routes>
          </Router>

        </main>

      </header>


    </div>
  );


}


export default App;
