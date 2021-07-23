import { Route, BrowserRouter, Switch } from "react-router-dom";

import routes from "./constants/routes";

import AllRanks from "./components/AllRanks";
import Ranks from "./components/Ranks";
import Login from "./components/Login";
import Register from "./components/Register";
import Submit from "./components/Submit";
import Profile from "./components/Profile";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.ALL_RANKS}>
          <Layout>
            <AllRanks edit />
          </Layout>
        </Route>
        <Route path={routes.EDIT_PROF}>
          <Layout>
            <Register edit />
          </Layout>
        </Route>
        <Route path={routes.EDIT_SCHE}>
          <Layout>
            <Submit edit />
          </Layout>
        </Route>
        <Route path={routes.LOGIN} component={Login} />
        <Route path={routes.REGISTER} component={Register} />
        <Route exact path={routes.PROFILE}>
          <Layout>
            <Profile />
          </Layout>
        </Route>
        <Route path={routes.RANKS}>
          <Layout>
            <Ranks />
          </Layout>
        </Route>
        <Route path={routes.SUBMIT}>
          <Layout>
            <Submit />
          </Layout>
        </Route>
        <Route>
          <Layout>404</Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
