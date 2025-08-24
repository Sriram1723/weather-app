import React from 'react'

const Search = ({searchValue , setSearchValue , handleSubmit}) => {
  return (
    <div className='search-container'>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Search City...'
      ></input>
      <button
        onClick={() => handleSubmit()}
      >submit</button>
    </div>
  )
}

export default Search
