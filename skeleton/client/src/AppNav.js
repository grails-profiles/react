import React from 'react';
import {Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, UncontrolledDropdown} from 'reactstrap';

import grailsLogo from './images/grails.svg';

const NavDropdownItem = props => {
  return <DropdownItem tag='li'><NavLink>{props.children}</NavLink></DropdownItem>
}

const AppNav = ({serverInfo, clientInfo, collapse, toggle}) => {

  const {environment, appprofile, appversion, grailsversion, reloadingagentenabled, artefacts, plugins} = serverInfo;

  return (
    <Navbar style={{backgroundColor: '#424649', borderRadius: 0}} dark expand='lg' className='navbar-static-top'>

      <NavbarBrand>
        <img src={grailsLogo} alt="Grails"/>
      </NavbarBrand>
      <NavbarToggler onClick={toggle}/>

      <Collapse isOpen={collapse} navbar>
        <Nav className="ml-auto nav" navbar>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle caret nav>
              Application Status
            </DropdownToggle>
            <DropdownMenu right tag='ul'>
              <NavDropdownItem>Environment: {environment}</NavDropdownItem>
              <NavDropdownItem>App
                profile: {appprofile ? appprofile.replace('org.grails.profiles:', '') : null}</NavDropdownItem>
              <NavDropdownItem>Server version: {appversion}</NavDropdownItem>
              <NavDropdownItem>Client version: {clientInfo ? clientInfo.version : null}</NavDropdownItem>
              <DropdownItem tag='li' divider></DropdownItem>
              <NavDropdownItem>Grails version: {grailsversion}</NavDropdownItem>
              <NavDropdownItem>React
                version: {clientInfo ? clientInfo.react.replace('^', '') : null}</NavDropdownItem>

              <DropdownItem tag='li' divider></DropdownItem>
              <NavDropdownItem>Reloading active: {reloadingagentenabled ? 'true' : 'false'}</NavDropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle caret nav>
              Artefacts
            </DropdownToggle>
            <DropdownMenu right tag='ul'>
              <NavDropdownItem>Controllers: {artefacts ? artefacts.controllers : 0}</NavDropdownItem>
              <NavDropdownItem>Domains: {artefacts ? artefacts.domains : 0}</NavDropdownItem>
              <NavDropdownItem>Services: {artefacts ? artefacts.services : 0}</NavDropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>


          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle caret nav>
              Installed Plugins
            </DropdownToggle>

            {plugins ?
              <DropdownMenu right tag='ul'>
                {plugins.map(plugin => {
                  return <NavDropdownItem
                    key={plugin.name}>{plugin.name} - {plugin.version}</NavDropdownItem>
                })
                }
              </DropdownMenu> : null
            }

          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );

};

export default AppNav;
