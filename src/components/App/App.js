import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppHeader from '../layout/Header/AppHeader';
import ViewportHeader from '../layout/Header/ViewportHeader';
import Nav from '../layout/Nav/CustomNav';
import styles from './App.module.scss';
import Card from '../elements/Card/Card';
import Image from '../elements/Image/Image';
import {cardsData} from '../../data';

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
                {cardsData.map(card => (
                  <Card
                    key={card.id}
                    image={<Image src={card.img} />}
                    filename={card.filename}
                    date={card.date}
                    filesize={card.size}
                    fluid
                  />
                ))}
              </section>
            </main>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
