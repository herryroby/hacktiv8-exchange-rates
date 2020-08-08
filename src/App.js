import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import { createBrowserHistory } from 'history';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/atoms/ErrourBoundary';
import ExchangeRates from './pages/ExchangeRates';
import customTheme from './theme';

const App = () => {
  const [browserHistory] = useState(createBrowserHistory());
  return (
    <ErrorBoundary>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <ColorModeProvider>
          <Router history={browserHistory}>
            <Switch>
              <Route path="/" component={ExchangeRates} exact />
            </Switch>
          </Router>
        </ColorModeProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
