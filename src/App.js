import React from 'react';
import { Header } from './Components/header';
import { Dataset } from './Components/dataset';

let api = "http://localhost:8080/";

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Header title="tensor school" img_src="img/logo.jpg"
          description="Это страница школы Тензор в городе Уфа. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий." />
        <div className="persons">
          <Dataset host={api} object="students" />
          <Dataset host={api} object="teachers" />
        </div>
      </div>
    );
  }
}


export default App;
