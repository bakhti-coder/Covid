import { Fragment } from "react";
import Header from "./components/header";
import { Main } from "./components/main";
import { About } from "./components/about";
import Services from "./components/services";
import Articles from "./components/articles";
import { Contact } from "./components/contact";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <About />
      <Services />
      <Articles />
      <Contact />
    </Fragment>
  );
}

export default App;
