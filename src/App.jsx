import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>{' '}
    <span>{item.author}</span>{' '}
    <span>{item.num_comments}</span>{' '}
    <span>{item.points}</span>{' '}
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </li>
);

const InputWithLabel = ({ id, value, type = 'text', onInputChange, children }) => (
  <>
    <label htmlFor={id}>{children}</label>
    <input id={id} type={type} value={value} onChange={onInputChange} />
  </>
);

const App = () => {
  const initialStories = [
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: 'Dan Abramov',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [stories, setStories] = useState(initialStories);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || '');

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );
    setStories(newStories);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search: </strong>
      </InputWithLabel>
      <hr />
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
};

export default App;
