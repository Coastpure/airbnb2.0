import Filters from "./components/Filters"
import Navbar from "./components/Navbar"
import Rentals from "./components/Rentals"


function App() {

  return (
    <div className="App">
      
      {/*Navbar*/}
      <Navbar />
      {/*Filters*/}
      <div className="sm:mx-6 md:mx-8 lg:mx-12 px-3">
        <Filters />
      {/*Rentals*/}
      <Rentals />
      </div>
      

      {/*Footer*/}
    </div>
  )
}

export default App
