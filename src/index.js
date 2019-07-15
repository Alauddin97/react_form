import React from 'react';
import ReactDOM from 'react-dom';
import './component/design.css'
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const App=()=>{
    return(
        <div className='design'>
            <table className="display">
            <tr><td><label>Name:</label></td><td><input type="text" placeholder="Name"/></td></tr><br/><br/>
            <tr><td><label>Age:</label></td><td><input type="number" placeholder="Age"/></td></tr><br/><br/>
            <tr><td><label>Address:</label></td><td><input type="text" placeholder="Address"/></td></tr><br/><br/>
            <tr><label>Gender:</label><td>
                <input type="radio" name="gender"/>Male
                <input type="radio" name="gender"/>Female</td></tr><br/><br/>
            <tr><td><label>Date_of_Birth:</label></td><td><input type="date"/></td></tr><br/><br/>
            <tr><td colSpan="5px"><button>SignUp</button></td></tr>
            </table>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();