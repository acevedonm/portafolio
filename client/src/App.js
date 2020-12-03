import React, {Component} from "react";
import "./App.css";
import {Layout, Header,Navigation, Drawer, Content}  from 'react-mdl';

class App extends Component {
  render(){
  return (
<div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(https://justresults.co.nz/wp-content/uploads/2015/10/web-developer-banner.png) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
  );}
}

export default App;
