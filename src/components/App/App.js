import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import styles from './App.module.scss';

function App() {
  return (
    <Switch>
      <Route path="/">
        <div className={styles.App}>
          <Header />
          <div className={styles.container}>
            <Nav />
            <main>some content</main>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
