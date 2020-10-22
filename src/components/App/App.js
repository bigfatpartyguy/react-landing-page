import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppHeader from '../layout/Header/AppHeader';
import ViewportHeader from '../layout/Header/ViewportHeader';
import Nav from '../layout/Nav/CustomNav';
import styles from './App.module.scss';
import Card from '../elements/Card/Card';
import Image from '../elements/Image/Image';
import file01 from '../../assets/images/Img_01.png';

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
              <section className={styles.main__content}>
                <Card
                  image={<Image src={file01} />}
                  filename="Dropbox-logo.jpg"
                  meta="Jul 22, 110.2KB"
                />
              </section>
            </main>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
