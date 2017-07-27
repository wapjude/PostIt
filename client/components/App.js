import React, { Component } from 'react';
import Footer from './Footer';

require('../scss/main.scss');

class App extends Component {

  render(){
    return(
      <div>
        <div className='content'>
            {this.props.children}
            <Footer />
        </div>
      </div>
    );
  }
}

export default App