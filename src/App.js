import React, { Component } from 'react';

import Header from './layout/header/header';
import Footer from './layout/footer';
import Content from './layout/content';

class App extends Component {
  render() {
      const sn = "React JS1";
      return <div className="home">
          <Header
              siteName = {sn}
              lang = "EN"/>
          <Content/>
          <Content/>
          <Content/>
          <Content/>
          <Footer name = {sn}/>
      </div>;
  }
}

export default App;
