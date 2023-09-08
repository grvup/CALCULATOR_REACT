
import React from "react"
import './App.css'
import Navbar from "./Navbar"
import Body from "./Body"
function App() {
  return (
    <div className="App">
     <header className="App-header">
      <Navbar/>
     </header>
     <body>
      <Body/>
     </body>
  </div>
  )
}

export default App;
