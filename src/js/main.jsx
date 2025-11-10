import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

import SecondsCounter from './components/SecondsCounter';

const root = ReactDOM.createRoot(document.getElementById("root"));
let counter = 0;

setInterval(function () {
  counter = counter + 1;
  
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={counter}/>
    </React.StrictMode>,
  )
}, 1000)


