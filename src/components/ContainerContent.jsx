import React from 'react';

class ContainerContent extends React.Component {
  renderContent() {
    const content = <div>{this.props.children}</div>;
    return this.props.showContent ? content : null;
  }
  
  render() {
    return this.renderContent();
  }
}

export default ContainerContent;
