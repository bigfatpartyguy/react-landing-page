import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import AppHeader from '../layout/Header/AppHeader';
import ViewportHeader from '../layout/Header/ViewportHeader';
import Nav from '../layout/Nav/CustomNav';
import styles from './App.module.scss';
import Card from '../elements/Card/Card';
import {addSelectedField} from '../../helpers/helpers';

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [searchStr, setSearchStr] = useState('');
  const [layoutView, setLayoutView] = useState('thumb');

  useEffect(() => {
    console.log('call');
    fetch('api/cards')
      .then(response => response.json())
      .then(cards => setCards(addSelectedField(cards)));
  }, []);

  const handleSearchStr = evt => {
    setSearchStr(evt.target.value);
  };

  const changeLayoutView = view => {
    setLayoutView(view);
  };

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

  const deleteCard = id => {
    const card = cards.find(card => card.id === id);
    setSelectedCount(prevCount => {
      if (card.selected) {
        return prevCount - 1;
      }
      return prevCount;
    });
    setCards(prevCards => prevCards.filter(card => card.id !== id));
  };

  return (
    <Switch>
      <Route path="/">
        <div className={styles.App}>
          <Nav />
          <div className={styles.container}>
            <AppHeader
              searchStr={searchStr}
              handleSearchStr={handleSearchStr}
            />
            <main className={styles.main}>
              <ViewportHeader
                count={selectedCount}
                layoutView={layoutView}
                changeLayoutView={changeLayoutView}
              />
              <section className={styles.main__content}>
                {cards
                  .filter(card => {
                    if (!searchStr) return true;
                    const reg = new RegExp(`${searchStr}`, 'i');
                    const match = card.filename.match(reg);
                    if (match) return true;
                    return false;
                  })
                  .map(card => (
                    <Card
                      key={card.id}
                      fluid
                      cardInfo={card}
                      handleSelectDeselect={selectDeselectCard}
                      handleDelete={deleteCard}
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
