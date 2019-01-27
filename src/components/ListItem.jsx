import React from 'react';

class ListItem extends React.Component {
  delete(elem) {
    let items = this.props.storageItems.filter(el => el !== elem);
    this.props.setStorageItems(items);
  }

  getItems() {
    if (!this.props.storageItems) {
      return null;
    }

    let items = this.props.storageItems.filter(el => !!el);

    items = items.map(elem => (
      <li className='listitem' onClick={() => this.delete(elem)}>
        <span>{elem}</span>
      </li>
    ));

    return items;
  }

  render() {
    return this.getItems();
  }
}

export default ListItem;
