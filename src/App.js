
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import About from './Components/About';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (msg,type) =>{
      setAlert({
        msg:msg,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
 const toggleMode = ()=>{
      if(Mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        showAlert("Dark Mode has been Enabled","success")
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        showAlert("Light Mode has been Enabled","success")

      }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title ="Textutils" aboutText ="About" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className="container my-3">
             
                {/* <Routes> */}
                {/* <Route exact path="/about"  element={<About/>}/> */}
               {/* </div> <Route path="/" element={<Textform heading = " Enter the text to Analyse " mode={Mode} ShowAlert={showAlert}/>}/> */}
                {/* <Route path="/home" element={<Textform heading = " Enter the text to Analyse " mode={Mode} ShowAlert={showAlert}/>}/> */}
                <Textform heading = " Enter the text to Analyse " mode={Mode} ShowAlert={showAlert}/>
                {/* </Routes> */}
             
        </div>
      {/* </Router> */}
   
   
       </>
  );
}

export default App;
