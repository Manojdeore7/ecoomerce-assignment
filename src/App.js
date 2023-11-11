import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Items from "./Components/Items";
import Cart from "./Components/Cart";
import { Switch, Route } from "react-router-dom";
import Detailpage from "./Components/Detailpage";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Items />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/:useId">
          <Detailpage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
