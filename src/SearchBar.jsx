//the search bar is separate from the main app for a few reasons
//it prevents App.jsx from becoming too crowded
//it maintains a single source of truth by separating when the user is typing from the data query used
function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="searchBar">
      <label>Search contacts by name or email:</label>
      <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
    </div>
  )
}

export default SearchBar