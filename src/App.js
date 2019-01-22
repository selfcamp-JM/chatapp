import React, { Component } from 'react';
import Layout from "./Components/Layout";
import "./index.css"


class App extends Component {
  render() {
    return (
      <div className="container">
         <Layout title ="Chat app"/>
      </div>
    );
  }
}

export default App;
