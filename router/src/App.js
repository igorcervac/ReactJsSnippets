import './App.css';
import {Link, Outlet} from 'react-router-dom'

const Home = () => {
  return (
  <div>
    <nav><Link to='/contact'>Contact</Link></nav>
    <nav><Link to='/about'>About</Link></nav>
    <h1>Home</h1>
  </div>);
}

export const Contact = () => {
  return (
    <div className='App'>
      <nav><Link to='/'>Home</Link></nav>
      <nav><Link to='/about'>About</Link></nav>
      <h1>Contact</h1>
    </div>);
}

export const About = () => {
  return (
    <div className='App'>
      <nav><Link to='/'>Home</Link></nav>
      <nav><Link to='/contact'>Contact</Link></nav>
      <h1>About</h1>
      <Outlet></Outlet>
  </div>);
}

export const History = () => {
  return (<h2>History</h2>)
}

export function App() {
  return (
    <div className="App">      
      <Home></Home>   
    </div>
  );
}

