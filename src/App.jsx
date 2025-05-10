import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  console.log("App renders")

  const stories = [
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
  ]

  const getStoredSearchTerm = () =>
    localStorage.getItem('search') || ''

  const [searchTerm, setSearchTerm] = useState(getStoredSearchTerm)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
    console.log("Search Term:", event.target.value)
  }

  useEffect(() => {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
        <button onClick={() => setSearchTerm("")}>
          Reset Search
        </button>
      </div>

      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <p>Searching for: {searchTerm}</p>
      <List list={filteredStories} />
    </>
  )
}

const Search = ({ searchTerm, onSearch }) => {
  console.log("Search renders")

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearch}
      />
    </form>
  )
}

const List = ({ list }) => {
  console.log("List renders")

  return (
    <div>
      <p>This is my list:</p>
      <ul>
        {list.map(({ objectID, ...item }) => (
          <Item key={objectID} item={item} />
        ))}
      </ul>
    </div>
  )
}

const Item = ({ item }) => {
  console.log("Item renders")
  const { title, url, author, num_comments, points } = item

  return (
    <li>
      <a href={url}>{title}</a> — the author is {author}, comments: {num_comments}, points: {points}
    </li>
  )
}

export default App
