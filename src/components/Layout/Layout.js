import React from "react";
import {Route,Switch,Redirect,withRouter,} from "react-router-dom";
import {Box, IconButton, Link} from '@material-ui/core';
import Icon from '@mdi/react';
//icons
import {mdiFacebook as FacebookIcon,mdiTwitter as TwitterIcon,mdiGithub as GithubIcon,} from '@mdi/js'
// styles
import useStyles from "./styles";
// components
import Header from "../Header";
import Sidebar from "../Sidebar";
// pages
import Dashboard from "../../pages/dashboard";
import Home from "../../pages/home/Home";
import Live from "../../pages/Live/live";
import LiveAvailable from "../../pages/Live/LiveAvailable";
import Maps from "../../pages/maps";
import Charts from "../../pages/charts";
import Chat from '../../pages/Chat/Chat'
import Footer from '../Footer/footer'
function Layout(props) {
  var classes = useStyles();
  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classes.content}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/home" component={Home} />
              <Route path="/app/typography" component={Dashboard} />
              <Route path="/app/map" component={Maps} />
              <Route path="/app/live" component={LiveAvailable} />
              <Route path="/app/chat" component={Chat} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/charts" component={Charts} />
            </Switch>
            <Footer/>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
