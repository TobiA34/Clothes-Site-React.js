import {useState} from 'react'

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  return (
    <div>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search Product"
        aria-label="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar
