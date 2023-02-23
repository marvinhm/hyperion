import { useState } from 'react';
import Navbar from './components/Navbar';
import CourseContent from './components/CourseContent';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <CourseContent/>
    </div>
  )
}

export default App
