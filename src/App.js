import 'bootstrap/dist/css/bootstrap.min.css'; 

import './App.css';
import { useState } from 'react';
function App() {
  let [valueOfRange , setValueOfRange] = useState(0)
  let [dateOfPara, setDateOfPara] = useState(new Date())
  let [numValue , setNumValue] = useState(valueOfRange)
  let [alertArea , setAlertArea] = useState("")
  
  function decreaseFun(){
         if (valueOfRange > 0 && numValue > 0){
        var updatedValue = Number(numValue) - Number(valueOfRange)
        setNumValue(updatedValue)
        setAlertArea("")
    }else if(valueOfRange  === 0 ){
      setAlertArea("please select the range")
     
    }
  }

  function incrementFun(){
    if(valueOfRange === 0){
      setAlertArea("please select the range")
    }
    else {
      var updatedValue = Number(numValue) + Number(valueOfRange)
      setNumValue(updatedValue)
      setAlertArea("")
    }
  }
  function settingdateofparafoo() {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
    var months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'August', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    if ((numValue == "0") || (numValue == "")) {
      var date = dateOfPara.getDate();
      var year = dateOfPara.getFullYear();
      var day = days[dateOfPara.getDay()];
      var month = months[dateOfPara.getMonth()];

      return `Today is ${day} ${month} ${date} ${year}`;
    } else {
      var todaySDate = new Date(dateOfPara);
      todaySDate.setDate(todaySDate.getDate() + Number(numValue));

      var date = todaySDate.getDate();
      var year = todaySDate.getFullYear();
      var day = days[todaySDate.getDay()];
      var month = months[todaySDate.getMonth()];

      return `${numValue} days from today is ${day} ${month} ${date} ${year}`;
    }
  }
  
  
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <div className="card">
      <div className="card-header" style={{backgroundColor:"grey"}}>Date Counter</div>
      <div className="card-body" style={{backgroundColor:"#413b3b"}}>
        <blockquote className="blockquote mb-0">
          <div className="d-flex justify-content-space-evenly align-items-center">
            <input
              type="range"
              className="form-range mx-2 mb-3"
              min="0"
              max="10"
              step="1"
              value={valueOfRange}
              id="customRange1"
              onChange={(e) => {
                setValueOfRange(e.target.value );
              }}
            />
            <p style={{ color: 'white' }}>{valueOfRange}</p>
          </div>
          <p style={{ color: 'red', fontSize: 'medium' , textAlign:"center" }}>{alertArea}</p>
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            <button style={{backgroundColor:"white", color:"black"}} type="button" onClick={decreaseFun} className="btn btn-outline-dark">
              -
            </button>
            <input
              style={{ width: '65%' }}
              type="number"
              className="mx-2"
              onChange={(e) => {
                setNumValue(e.target.value);
              }}
              value={numValue}
            />
            <button style={{backgroundColor:"white", color:"black"}}  type="button" onClick={incrementFun} className="btn btn-outline-dark">
              +
            </button>
          </div>
          <p style={{ color:"white", textAlign:"center"}}  className="mt-3">{settingdateofparafoo()}</p>
        </blockquote>
      </div>
    </div>
  </div>
  );
}

export default App;
