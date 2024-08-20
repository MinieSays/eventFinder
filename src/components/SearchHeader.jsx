import React from 'react'

const SearchHeader = ( {title, subtitle} ) => {
    return (
            <div className="search__header--text">
              <h1 className="search__title">{title}</h1>
              <h2 className="search__sub-title">
                {subtitle}
              </h2>
          </div>
    )
  }
  
  export default SearchHeader