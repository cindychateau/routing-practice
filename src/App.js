import { BrowserRouter, Switch, Route } from "react-router-dom";
import ComponenteParametros from "./Componentes/ComponenteParametros/ComponenteParametros";
import Home from "./Componentes/Home/Home";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact render={() => <Home />} />
          <Route path="/:palabra" exact render={(routeProps) => <ComponenteParametros {...routeProps} /> } />
          <Route path="/:palabra/:color/:bg" render={(routeProps) => <ComponenteParametros {...routeProps} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
