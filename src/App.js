import logo from "./logo.svg";
import "./App.css"; // Custom styles
import HeroCard from "./Components/HeroCard"; // Ensure this file exists
import NavbarComponent from "./Components/NavbarComponent";
import FilterComponent from "./Components/FilterComponent";
 
function App() {
  const items = [
    { id: 1, name: "Item 1", price: 10.99 },
    { id: 2, name: "Item 2", price: 12.49 },
    { id: 3, name: "Item 3", price: 8.99 },
    { id: 4, name: "Item 4", price: 15.99 },
    { id: 5, name: "Item 5", price: 20.0 },
    { id: 6, name: "Item 6", price: 7.5 },
    { id: 7, name: "Item 7", price: 18.75 },
    { id: 8, name: "Item 8", price: 25.0 },
    { id: 9, name: "Item 9", price: 5.99 },
    { id: 10, name: "Item 10", price: 14.99 },
  ];

  return (
    <div className="App">
      <div className="container-fluid vh-100 p-4">
        {/* Navbar */}
        <NavbarComponent />

        {/* Hero Card */}
        <HeroCard />
        {/* Filter */}
        <FilterComponent/>
        {/* Example Text */}
        <h1 className="text-start mt-4">Title</h1>
        
      </div>
    </div>
  );
}

export default App;
