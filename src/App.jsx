import { useState } from 'react';
import Navbar from './components/Navbar';
import CourseContent from './components/CourseContent';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <CourseContent/>
    </div>
  )
}

export default App
