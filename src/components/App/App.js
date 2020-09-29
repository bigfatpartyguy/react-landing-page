import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppHeader from '../layout/Header/AppHeader';
import ViewportHeader from '../layout/Header/ViewportHeader';
import Nav from '../layout/Nav/CustomNav';
import styles from './App.module.scss';

function App() {
  return (
    <Switch>
      <Route path="/">
        <div className={styles.App}>
          <Nav />
          <div className={styles.container}>
            <AppHeader />
            <main className={styles.main}>
              <ViewportHeader info="You have selected 2 items" />
            </main>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
