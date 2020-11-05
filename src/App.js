import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./components/Signin/Signin";

// const Test1 = () => <div>Test1</div>;
// const Test2 = () => <div>Test2</div>;
// const Test3 = () => <div>Test3</div>;
// const Test4 = () => <div>Test4</div>;
const DefaultPage = () => <div>DefaultPage Test5</div>;

function App() {
  return (
    <>
      <Router basename="/tournament-game-onlyfront">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="*" component={DefaultPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
