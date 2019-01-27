import React from 'react';

class SearchFrame extends React.Component {
  render() {
    const classes = this.props.fullSize ? 'search-full' : 'search-small';
    return (
      <div className='searchframe'>
        <input
          type='text'
          placeholder='&#xf002; Add'
          maxLength='30'
          className={'search ' + classes}
          value={this.props.searchQuery}
          onChange={this.props.onChangeEvent}
        />
        {this.props.showContent ? (
          <button className='button-cancel' onClick={this.props.cancel}>
            Cancel
          </button>
        ) : null}
      </div>
    );
  }
}

export default SearchFrame;
