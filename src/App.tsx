import React from 'react';
import logo from './logo.svg';
import './App.css';
import Status from './component/Status';
import Container from './component/Container';
import Parents from './component/Parents';

const App: React.FC = () => {
  return (
    <div className="App">
      <Status status="success" />

      <Parents> <Container> This is container. </Container> </Parents>
    </div>
  );
}

export default App;
