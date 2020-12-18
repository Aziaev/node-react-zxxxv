import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import Body from "./components/Body";
import Home, { homePageRoute } from "./pages/Home";
import Login, { LOGIN_PAGE_ROUTE } from "./pages/Login";
import Me, { ME_PAGE_ROUTE } from "./pages/Me";
import NotFound from "./pages/NotFound";
import Register, { REGISTER_PAGE_ROUTE } from "./pages/Register";
import StartPage, { START_PAGE_ROUTE } from "./pages/StartPage";

function App() {
  return (
    <LayoutWrapper>
      <Header />
      <Body>
        <Switch>
          <Route path={START_PAGE_ROUTE} exact component={StartPage} />
          <Route path={homePageRoute} exact component={Home} />
          <Route path={ME_PAGE_ROUTE} exact component={Me} />
          <Route path={LOGIN_PAGE_ROUTE} exact component={Login} />
          <Route path={REGISTER_PAGE_ROUTE} exact component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Body>
      <Footer />
    </LayoutWrapper>
  );
}

export default App;
