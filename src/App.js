import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(() =>{
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response);
  }, []);

  return (
    <div>
      <h3>hi</h3>
    </div>
  );
}

export default App;
