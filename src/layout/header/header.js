import React, { Component } from 'react';
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <div>
       - {this.props.siteName} -
        -{this.props.lang === 'EN' ? 'English' : '-no language-'}
      </div>
    );
  }
}

export default Header;