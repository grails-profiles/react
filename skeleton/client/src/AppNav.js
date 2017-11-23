import React from 'react';
import { Navbar, NavDropdown, Nav, MenuItem } from 'react-bootstrap';

import grailsLogo from './images/grails.svg';
import 'whatwg-fetch';

function AppNav({serverInfo, clientInfo}) {

  const {environment, appprofile, appversion, grailsversion, reloadingagentenabled, artefacts, plugins} = serverInfo;

  return(
    <Navbar style={{backgroundColor: '#424649', backgroundImage: 'none', borderRadius: 0}}>
      <Navbar.Header>
        <Navbar.Brand>
            <img src={grailsLogo} alt="Grails" width="80" height="80"/>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavDropdown eventKey="4" title="Application Status " id="app-status">
            <MenuItem eventKey="4.1">Environment: {environment}</MenuItem>
            <MenuItem eventKey="4.2">Grails profile: {appprofile ? appprofile.replace('org.grails.profiles:', '') : null}</MenuItem>
            <MenuItem eventKey="4.2">Grails version: {grailsversion}</MenuItem>
            <MenuItem eventKey="4.3">React version: {clientInfo ? clientInfo.react.replace('^', '') : null}</MenuItem>
            <MenuItem eventKey="4.3">Server version: {appversion}</MenuItem>
            <MenuItem eventKey="4.3">Client version: {clientInfo ? clientInfo.version : null}</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Reloading active: {reloadingagentenabled ? 'true' : 'false'}</MenuItem>
          </NavDropdown>

          <NavDropdown eventKey="4" title="Artefacts " id="artefacts">
            <MenuItem eventKey="4.1">Controllers: {artefacts ? artefacts.controllers : 0}</MenuItem>
            <MenuItem eventKey="4.2">Domains: {artefacts ? artefacts.domains : 0}</MenuItem>
            <MenuItem eventKey="4.3">Services: {artefacts ? artefacts.services : 0}</MenuItem>
          </NavDropdown>

          <NavDropdown eventKey="4" title="Installed Plugins " id="plugins">

            {plugins ? plugins.map(plugin => {
              return <MenuItem eventKey="4.1" key={plugin.name}>{plugin.name} - {plugin.version}</MenuItem>
            }) : null
            }


          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>);

}

export default AppNav;
