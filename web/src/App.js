import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import Main from "./components/Main";
import Home, { homePageRoute } from "./pages/Home";
import Login, { loginPageRoute } from "./pages/Login";
import Me, { mePageRoute } from "./pages/Me";
import NotFound from "./pages/NotFound";
import Register, { registerPageRoute } from "./pages/Register";
import StartPage, { startPageRoute } from "./pages/StartPage";

function App() {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <Switch>
          <Route path={startPageRoute} exact component={StartPage} />
          <Route path={homePageRoute} exact component={Home} />
          <Route path={mePageRoute} exact component={Me} />
          <Route path={loginPageRoute} exact component={Login} />
          <Route path={registerPageRoute} exact component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Main>
      <Footer />
    </LayoutWrapper>
  );
}

export default App;
