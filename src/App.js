import React from "react";
import { Provider } from "react-redux";
import Formonedata from "./Formonedata";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Formonedata />
    </Provider>
  );
};

export default App;
