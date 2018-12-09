import React, { Component } from "react";
import Header from "./common/header/index.js";
import { GlobalStyle } from "./statics/iconfont/iconfont.js";
import store from "./store/index.js";
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
