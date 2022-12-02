import React from 'react'
import Teacher from './component/Teacher'
import "./App.css"
import Movies from './component/Movies'
// import MyForm from './component/MyForm'

const App = () => {
  return (
    <div>
      {/* <Teacher></Teacher> */}
      <Movies />
      {/* <MyForm></MyForm> */}
    </div>
  )
}

export default App

// const res = await axios.get(`http://www.omdbapi.com/?apikey=39192f7c&s=lord`, { headers: { "Content-Type": "application/json" } });