import React from 'react'

const Search = ({Search, setSearch}) => {
  return (
    <div className='col-sm-6 mb-4'>
        <form onSubmit={(e) => e.preventDefault()}>
            <input className='form-control' type='search' role='search' placeholder='Search items...' value={Search} onChange={(e) => setSearch(e.target.value)}>
            </input>
        </form>
      
    </div>
  )
}

export default Search
