import React from "react";
import { Layout, Content } from "react-mdl";
import Main from "./components/main";
import "./style/mdl.css";
import NavBar from "./components/navigation/navBar/navBar";
import DrawerNavigation from "./components/navigation/drawerNavigation/drawerNavigation";
const App = () => {
  return (
    <div>
      <Layout>
        <NavBar />
        <DrawerNavigation />
        <Content>
          {/* INSERTO EL ROUTER EN EL CONTENIDO DE LA WEB */}
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
