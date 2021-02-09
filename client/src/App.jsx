import React from "react";
import { Layout, Content } from "react-mdl";
import Main from "./components/main.jsx";
import "./style/mdl.css";
import NavBar from "./components/navigation/navBar/navBar";
import DrawerNavigation from "./components/navigation/drawerNavigation/drawerNavigation";
const App = () => {
  return (
    <div>
      <Layout>
        <NavBar />
        <DrawerNavigation/>
        <Content style={{background: "red"}}>
          {/* INSERTO EL ROUTER EN EL CONTENIDO DE LA WEB */}
          
          <Main />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
