import "./App.css";
import Sidebar from "./Components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Items from "./Components/Films";
import Cart from "./Components/Cart";
import { Switch, Route } from "react-router-dom";
import Detailpage from "./Components/Detailpage";
import Films from "./Components/Films";
function App() {
  return (
    <div className="App">
      <Header />
      <div class="content">
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route path="/Films" exact>
              <Films />
            </Route>
            <Route path="/" exact>
              <Cart />
            </Route>
            <Route path="/:useId">
              <Detailpage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
