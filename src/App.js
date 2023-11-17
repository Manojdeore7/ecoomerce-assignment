import "./App.css";
import Sidebar from "./Components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Items from "./Components/Films";
import Cart from "./Components/Cart";
import { Switch, Route } from "react-router-dom";
import Detailpage from "./Components/Detailpage";
import Films from "./Components/Films";
import People from "./Components/People";
function App() {
  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
      <br></br>
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
=======
      <div class="content">
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route path="/films" exact>
              <Films />
            </Route>
            <Route path="/people" exact>
              <People />
            </Route>
            <Route path="/" exact>
              <Cart />
            </Route>
            {/* <Route path="/:useId">
              <Detailpage />
            </Route> */}
          </Switch>
        </div>
      </div>
>>>>>>> df6400d7de0caef9d032317a420e2f8339589ff4
    </div>
  );
}

export default App;
