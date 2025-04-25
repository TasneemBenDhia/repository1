import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
  greeting: "Hey",
  title: "React",
};

const list = [ 
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function getTitle(title) {
  return title;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Search />
      <Lista />
    </>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

function Lista() {
  return (
    <div>
      <p>This is my list:</p>
      <ul>
        {list.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a> — the author is {item.author}, comments: {item.num_comments}, points: {item.points}
          </li>
        ))}
      </ul>
    </div>
  );
}

  


export default App;
