import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../layout/Header';
import Nav from '../layout/Nav/CustomNav';
import styles from './App.module.scss';

function App() {
  return (
    <Switch>
      <Route path="/">
        <div className={styles.App}>
          <Nav />
          <div className={styles.container}>
            <Header />
            <main className={styles.main}>some content</main>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
