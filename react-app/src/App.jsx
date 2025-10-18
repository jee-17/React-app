import Navbar from './Navbar';
import Course from './course';
import Footer from './footer';
import './App.css'
import c from './assets/c.jpeg';
import cpp from './assets/cpp.jpeg';
import java from './assets/java.jpeg';

function App() {
 

  return (
    <>
    
     <Course name="c" price="$4" image={c} rating={5} />
      <Course name={12} price="$5" image={cpp} rating={4} show={true}/>
      
       <Course name="Java" price="$6" image={java} rating={4.5} show={true}/>
    
    </>
  );
}

export default App
