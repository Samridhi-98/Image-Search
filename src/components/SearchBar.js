import React, { useState } from 'react';

function SearchBar(props) {
  const { onSubmit } = props

  const [term, setTerm] = useState('')

  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(term);
  }

  return (
    <div className="ui segment">
      <form onSubmit={ onFormSubmit } className="ui form">
        <div className="field">
          <label> Image Search </label>
          <input type="text" onChange={ e => setTerm(e.target.value) }/>
        </div>
      </form>
    </div>
  )
}

export default SearchBar;