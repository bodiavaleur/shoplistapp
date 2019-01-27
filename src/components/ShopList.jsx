import React from 'react';

class ShopList extends React.Component {
  render() {
    return <ul className='items-list'>{this.props.children}</ul>;
  }
}

export default ShopList;
