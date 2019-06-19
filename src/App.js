import React from 'react';
import logo from './logo.svg';
import './App.css';

const pets = [
  {name: 'pig', fluff: [1,2]},
  {name: 'turtle', fluff: [1]},
  {name: 'dog', fluff: [5,6,7,8,9,10]},
  {name: 'alpaca', fluff: [4,5,6,7]}
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { critter: "pig"};
  }

  handleChange = event => console.log(event.target.value);

  render() {
    return (
      <div className="App">
        <select onChange={this.handleChange}>
          {pets.map(({name})=> <option key={name} value={name}>{name}</option> )}
        </select>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.critter}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a> */}
        {/* </header> */}
      </div>
    );
  }
}










// const Button = props => (<button>{ props.text }</button>);

// function Button({ blueKitten }) {
//   return (
//     <button>{ blueKitten }</button>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hello World</h1>
//         <Button blueKitten="ima button"/>
//         <Button blueKitten="stuff"/>
//         <Button blueKitten="button"/>
//         <Button blueKitten="ima"/>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
