import React from 'react';

class ButtonAdd extends React.Component {
  render() {
    return (
      <button className='button-add' type='submit'>
        <i className='fas fa-plus' /> Add to your shopping list
      </button>
    );
  }
}

export default ButtonAdd;
