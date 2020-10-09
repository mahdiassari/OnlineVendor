import React from "react";
import "./App.css";
import View from "./component/View";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}

export default App;
