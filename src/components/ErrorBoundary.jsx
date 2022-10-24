import React from 'react';
import './styles/errorBoundary.scss';

const initialState = {
  hasError: false,
  errorMessage: '',
};

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      errorMessage: error.message,
    });
  }

  render() {
    if (this.state.hasError) {
      return <div className="errorBoundary">{this.state.errorMessage}</div>;
    }
    return this.props.children;
  }
}
