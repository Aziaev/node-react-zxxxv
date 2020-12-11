import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import { Route, Switch } from "react-router-dom";
import Startpage from "./pages/Startpage";
import Home from "./pages/Home";
import Me from "./pages/Me";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <Switch>
          <Route path="/" exact component={Startpage} />
          <Route path="/home" exact component={Home} />
          <Route path="/me" exact component={Me} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Main>
      <Footer />
    </LayoutWrapper>
  );
}

export default App;
