import React, { useState } from 'react';
import './App.css';
import NoteForm from './components/NoteForm'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'


function App() {
  // const [visible, toggleSidebar] = useState(false);
  return (
    <Router>
      <Container style={style.container}>
        <Container fluid>
          <Header style={style.header}>Welcome to Send It where you can say what you have always wanted to say to anyone and <i>send it*</i> to them</Header>
        </Container>
        <Container fluid>
          <Route
            exact path='/'
            render={() => <NoteForm />}
          />
        </Container>
        <Container fluid>
          <p>*and by send it we me share it with the universe not the person directly per se...</p>
        </Container>
      </Container>
    </Router>
  );
}

export default App;

const style = {
  header: {
    height: '20vh',
  },
  container: {
    margin:'20px',
    padding:'20px'
  },
}
