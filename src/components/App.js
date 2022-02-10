import React from 'react';
// import * as Auth from './Auth';
import Main from './Main'
import api from './CardsApi';
import userApi from './UsersApi';



function App() {
  const [currentUser, setCurrentUser] = React.useState({ username: '', email: '', password: '' });
  const [cardsInfo, setCardsInfo] = React.useState([]);

  //Рендер данных на стр.
  React.useEffect(() => {
        Promise.all([
          userApi.getUserInfo(),
        api.getInitialMovies(),
        ])
          .then(([data, cardsInfo]) => {
            setCurrentUser(data);
            setCardsInfo([cardsInfo])
          })
          .catch((err) => {
            console.error(err)
          })
  }, [])
  
const random = async () => {
  const cardsInfo = await fetch('https://random-data-api.com/api/beer/random_beer', {
    headers: {
      'Acceps': 'application/json'
    }
  });
    const obj = await cardsInfo.json();
    setCardsInfo([obj])
}

  return (
      <div className="App">
          <Main cardsInfo={cardsInfo} currentUser={currentUser} random={random} />
      </div>
  );
}

export default App;
