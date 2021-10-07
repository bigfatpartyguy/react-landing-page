import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import AppHeader from '../layout/Header/AppHeader';
import ViewportHeader from '../layout/Header/ViewportHeader';
import Nav from '../layout/Nav/CustomNav';
import styles from './App.module.scss';
import Card from '../elements/Card/Card';
import Image from '../elements/Image/Image';
import {addSelectedField} from '../../helpers/helpers';

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    fetch('api/cards')
      .then(response => response.json())
      .then(cards => setCards(addSelectedField(cards)));
  }, []);

  const selectDeselectCard = id => {
    const card = cards.find(card => card.id === id);
    setSelectedCount(prevCount => {
      if (card.selected) {
        return prevCount - 1;
      } else {
        return prevCount + 1;
      }
    });
    setCards(prevCards =>
      prevCards.map(card => {
        if (card.id === id) {
          return {...card, selected: !card.selected};
        } else {
          return card;
        }
      })
    );
  };

  return (
    <Switch>
      <Route path="/">
        <div className={styles.App}>
          <Nav />
          <div className={styles.container}>
            <AppHeader />
            <main className={styles.main}>
              <ViewportHeader count={selectedCount} />
              <section className={styles.main__content}>
                {cards.map(card => (
                  <Card
                    key={card.id}
                    image={<Image src={card.img} />}
                    filename={card.filename}
                    date={card.date}
                    filesize={card.size}
                    fluid
                    selected={card.selected}
                    handleSelectDeselect={() => selectDeselectCard(card.id)}
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
