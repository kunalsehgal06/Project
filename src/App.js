import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
import { useState } from 'react'
import Alert from './Components/Alert';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// router do not work with github pages


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = `#01203f`;
      showAlert('success', 'Dark mode enabled');
      document.title = 'TextUtils- Dark';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = `#d1d2d3`;
      showAlert('success', 'Dark mode disabled');
      document.title = 'TextUtils- Light';
    }
  }

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} />
      <div style={{height: `7vh`}}>
      <Alert alert={alert} />
      </div>
      {/* <Switch> */}
      {/* <Route exact path='/'> */}
      <div className="container">
        <TextForm mode={mode} showAlert={showAlert} />
      </div>
      {/* </Route> */}
      {/* <Route exact path='/about'> */}
      {/* <About /> */}
      {/* </Route> */}
      {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}
export default App;