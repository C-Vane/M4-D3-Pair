import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import Fantasy from "./components/Fantasy";

class App extends React.Component {
  render() {
    return (
      <>
        <WarningSign text="error" />
        <MyBadge text="BlaBa" variant="primary" />
        <Fantasy />
      </>
    );
  }
}

export default App;
