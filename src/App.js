import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
