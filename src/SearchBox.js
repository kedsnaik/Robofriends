import React from 'react';

const SearchBox = ({searchchange}) => {
    return (
        <div>
            <input 
                className = "pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder = "Search robots"
                onChange = {searchchange}
            />
        </div>
    )
}

export default SearchBox;