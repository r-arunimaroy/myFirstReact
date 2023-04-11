import React from 'react'
import CountriesTable from './component/CountriesTable';

//import Restaurant from "./component/Basics/Restaurant"
//import Todo from './component/todoreact/todo'
//import Temp from './component/weather/temp'
// import UseState from "./component/Hooks/useState"
// import UseEffect from "./component/Hooks/useEffect"
//import UseReducer from "./component/Hooks/useReducer"

function App(){


return(
  <>
    <div className="d-flex flex-column align-items-center">
      <h1>React Data Table</h1>
      <CountriesTable/>
    </div>
  </>
)

  }
export default App