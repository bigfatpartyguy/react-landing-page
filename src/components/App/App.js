import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../layout/Header';
import Input from '../elements/Input/SearchInput';
import Nav from '../layout/Nav/CustomNav';
import styles from './App.module.scss';

function App() {
  return (
    <Switch>
      <Route path="/">
        <div className={styles.App}>
          <Nav />
          <div className={styles.container}>
            <Header className="header--dark">
              <Input
                className="input-search"
                type="search"
                placeholder="Type to search..."
              />
            </Header>
            <main className={styles.main}>
              <Header className="header--light header--slim">content</Header>
            </main>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
