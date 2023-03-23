// Source in our stylesheet
// import is similar to 'require' on the server
import './App.css';
//! This is required for react to update DOM
import { useState } from 'react';
// importing another component
import CreatureList from '../CreatureList/CreatureList';
import Header from '../Header/Header';
import Counter from '../Counter/Counter';
import Input from '../Input/Input';

function App () {
  // Our functions and variables will go here

  // This is how we previously declared variables
  // let firstName = 'Bailey';
  // let counter = 0;
  //      name      func to change var    default value
//   const [firstName, setFirstName] = useState('Bailey');
//   const [counter, setCounter] = useState(0);

//   // function to increase counter
//   let increaseClicks = () => {
//     // counter ++; // don't modify state directly
//     // console.log('before', counter);
//     setCounter(counter + 1);
//     //! counter has not been changed yet!
//     // react doesn't update value until DOM is refreshed
//     // console.log('after', counter);
//   }

// let decreaseClicks = () => {
//   if (counter > 0) {
//     setCounter(counter - 1);
//     // console.log(counter);
//   }
// }

  //React has a better way!

  const [headerText, setHeaderText] = useState('Welcome to React!!!');

  return (
    // This looks like HTML but is really JSX
    <div>
      <Header 
      headerTextProp={headerText}
      textColor="green"/>
      <Counter />
      <CreatureList />
      <Input />
    </div>
  );
}

export default App
