import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

const App = () => {
    const [data, setData] = useState(null);

    const fetchData = () => {
        fetch('http://localhost:3333/test')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo"/>
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
                </a>
                <span>{ JSON.stringify(data) }</span>
            </header>
        </div>
    );
}

export default App;
