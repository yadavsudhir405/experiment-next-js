import React from 'react';
import { compose } from 'redux';
import NextApp, { Container } from 'next/app';
import withRedux from '../redux/withReduxProvider';

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default compose(withRedux)(App);
