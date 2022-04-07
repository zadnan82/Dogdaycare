import react, { useState } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Welcome from './components/Welcome';
import Owners from './components/Owners';
import EachOwner from './components/EachOwner';
import {HashRouter as Router, Route , Routes} from 'react-router-dom'
import EachDog from './components/IndividualDog';
import Dogs from './components/Dogs';
import IndividualDog from './components/IndividualDog';
import AbsentDogs from './components/AbsentDogs';

function App() {


 

  const [daycareData, setDaycareData] = useState(null);
  const [eachDog, setEachDog] = useState(null);

    const fetchData = async () => {
        fetch('https://api.jsonbin.io/b/62457a721a1b610f08488545')
            .then(response => response.json())
            .then((jsonData) => {

                setDaycareData(jsonData);
                console.log('Datan med fetch' , jsonData)
            })
    }


    return (
      <div className="App">
        <header className="App-header">
        <main className="main">
          <Router>


          
              <Routes>
  
              <Route exact path="/" element= {
              <Welcome fetchData={() => fetchData()}/>
              } /> 
                 
  
                 <Route path="/absentdogs" element= {
                  <AbsentDogs daycareData={daycareData} setEachDog={setEachDog}/>
                }/>

                <Route path="/owners" element= {
                  <Owners daycareData={daycareData} setEachDog={setEachDog}/>
                }/>

                  <Route path="/dogs" element= {
                  <Dogs daycareData={daycareData} setEachDog={setEachDog}/>
                }/>
                  
               
  
                <Route path="/individualdog" element={
                <IndividualDog dog={eachDog}/>
                }/>
                  
          
  
              </Routes>
          </Router>
  
        </main>
          
        </header>
  
  
      </div>
    );
  
    
  }
  

export default App;
