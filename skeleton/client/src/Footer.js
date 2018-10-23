import React from 'react';

import advancedgrails from './images/advancedgrails.svg';
import documentation from './images/documentation.svg';
import slack from './images/slack.svg';
import {Row} from 'reactstrap';

const Footer = () => {

  return <Row className="footer" key={3}>
    <div className="col-md-4">
      <a href="http://guides.grails.org" target="_blank" rel="noopener noreferrer">

        <img src={advancedgrails} alt="Grails Guides" className="float-left"/>

      </a>
      <strong className="centered"><a href="http://guides.grails.org" target="_blank" rel="noopener noreferrer">Grails Guides</a></strong>
      <p>Building your first Grails app? Looking to add security, or create a Single-Page-App? Check out the <a
        href="http://guides.grails.org" target="_blank" rel="noopener noreferrer">Grails Guides</a> for step-by-step tutorials.</p>

    </div>
    <div className="col-md-4">
      <a href="http://docs.grails.org" target="_blank" rel="noopener noreferrer">
        <img src={documentation} alt="Grails Documentation" className="float-left"/>
      </a>
      <strong className="centered"><a href="http://docs.grails.org" target="_blank" rel="noopener noreferrer">Documentation</a></strong>
      <p>Ready to dig in? You can find in-depth documentation for all the features of Grails in the <a
        href="http://docs.grails.org" target="_blank" rel="noopener noreferrer">User Guide</a>.</p>

    </div>

    <div className="col-md-4">
      <a href="https://grails-slack.cfapps.io" target="_blank" rel="noopener noreferrer">
        <img src={slack} alt="Slack Guides" className="float-left"/>
      </a>
      <strong className="centered"><a href="https://grails-slack.cfapps.io" target="_blank" rel="noopener noreferrer">Join the
        Community</a></strong>
      <p>Get feedback and share your experience with other Grails developers in the community <a
        href="https://grails-slack.cfapps.io" target="_blank" rel="noopener noreferrer">Slack channel</a>.</p>
    </div>
  </Row>

};

export default Footer;
