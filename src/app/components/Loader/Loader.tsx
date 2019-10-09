import React from 'react';
import loader from './loader.gif';

import './style.css';

const Loader = (): JSX.Element => (
  <div className="loaderContainer">
    <div className="loaderContainer__loaderBackground">
      <img className="loaderContainer__loader" src={loader} alt="lodaer" />
    </div>
  </div>
);

export default Loader;
