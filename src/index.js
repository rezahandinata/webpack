import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const root = document.getElementById("app");
const content = (
<>
<img src="https://imgix3.ruangguru.com/assets/user_uploads/pp/pp_iqo2rc_8285.png" alt="react logo"/>
<p>Hellow React's World</p>
<a href="https://reactjs.org/">Learn React</a>
</>
);

ReactDOM.render(content, root);

