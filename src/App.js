import logo from './logo.svg';
import './App.css';

import React from 'react'; //

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyFavoriteGroup/>
      </div>
    );
  }
}

class MyFavoriteGroup extends React.Component {
  render() {
    return(
      <div>
        <h1>My favorite music group</h1>
        <h2>{group.name}</h2>
        <img src={group.imgPath}/>
        <p>Genre: {group.genre}</p>

        <p><b>Band members:</b></p>
        {group.bandMembers.map( m => (
          <div>{m}</div>
        ))}

        {/* ну можно еще инфо по альбомам + картинкам, но не хочу вот ниже ссыль на офсайт */}
        <p>Link to official site: <a href={group.link}>Dreat Thrater official site</a></p>

      </div>
    );
  }
}

const group = {
  name: "Dream Theater",
  // imgPath: "./public/images/DT.jpg", не хочет однако...
  imgPath: "https://dreamtheater.net/wp-content/uploads/2017/07/DT12-cover.jpg",
  genre: "Progressive metal, metal, jazz and many other styles...",
  bandMembers: [
    "JAMES LABRIE - Lead vocals",
    "JOHN PETRUCCI - guitars, backing vocals",
    "JORDAN RUDESS - keyboards",
    "JOHN MYUNG - bass guitars",
    "MIKE MANGINI - drums, percussion",
  ],
  link: "https://dreamtheater.net"
}

export default App;
