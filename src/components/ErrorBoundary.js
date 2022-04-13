import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError === true) {
      return (
        <div className="tc">
          <h1>Error has occurred!</h1>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
