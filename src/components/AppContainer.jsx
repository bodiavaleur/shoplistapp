import React from 'react';
import SearchFrame from './SearchFrame';
import ContainerContent from './ContainerContent';
import ShopList from './ShopList';
import ListItem from './ListItem';
import ButtonAdd from './ButtonAdd';
import '../styles/main.css';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      showContent: false,
      error: '',
      fullSize: true,
      storageItems: ''
    };

    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);
    this.setStorageItems = this.setStorageItems.bind(this);
  }

  getLocalStorage() {
    const storage = localStorage.getItem('shopItem');
    if (storage !== null) {
      return storage.split(',');
    } else {
      localStorage.setItem('shopItem', '');
      return localStorage.getItem('shopItem').split(',');
    }
  }

  onChangeEvent() {
    return evt => {
      const value = evt.target.value;
      let error = /\w+(\s+)?/gi.test(value) ? '' : 'Error';

      this.setState({
        searchQuery: value,
        showContent: true,
        error: error,
        fullSize: false
      });
    };
  }

  onClickCancel() {
    return () => {
      this.setState({
        searchQuery: '',
        showContent: false,
        fullSize: true
      });
    };
  }

  setStorageItems() {
    return items => {
      this.setState({ storageItems: items });
      localStorage.setItem('shopItem', items);
    };
  }

  onSubmitEvent() {
    return evt => {
      evt.preventDefault();

      if (this.state.error) {
        return alert("Can't add an empty item.");
      }

      let storage = this.state.storageItems;
      storage = storage !== null ? storage : '';
      storage += this.state.searchQuery ? `,${this.state.searchQuery}` : '';
      localStorage.setItem('shopItem', storage);
      this.setState({
        searchQuery: '',
        storageItems: localStorage.getItem('shopItem').split(',')
      });
    };
  }

  componentDidMount() {
    this.setState({ storageItems: this.getLocalStorage() });
  }

  render() {
    const classes = this.state.fullSize ? 'container-full' : 'app-container';

    const content = (
      <div>
        <ContainerContent showContent={this.state.showContent}>
          <ShopList>
            <ListItem
              setStorageItems={this.setStorageItems()}
              storageItems={this.state.storageItems}
            />
          </ShopList>
        </ContainerContent>
      </div>
    );

    return (
      <form onSubmit={this.onSubmitEvent()} className={classes}>
        <SearchFrame
          searchQuery={this.state.searchQuery}
          showContent={this.state.showContent}
          onChangeEvent={this.onChangeEvent()}
          cancel={this.onClickCancel()}
          fullSize={this.state.fullSize}
        />
        {this.state.showContent ? content : null}
        {this.state.showContent ? <ButtonAdd /> : null}
      </form>
    );
  }
}

export default AppContainer;
