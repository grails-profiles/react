import React from 'react';
import Immutable from 'immutable'
import autobind from './util/autobind'
import {Modal, Button} from 'react-bootstrap';

class About extends React.Component {

    constructor(props) {
        super(props); // must call before "this" is accessed

        autobind(this, 'toggle');
        
        this.state = {
            data: Immutable.fromJS({
                showModal: false
            })
        };
    }

    toggleModal() {
        const data = this.state.data.set('showModal', !this.state.data.get('showModal'));
        this.setState({data});
    }

    render() {
        const showModal = this.state.data.get('showModal');

        return <div>
            <h1>Hello from React!</h1>

            <Button bsStyle="success" onClick={this.toggleModal}>About Us</Button>

            <Modal show={showModal} onHide={this.toggleModal} dialogClassName="about-modal">
                <Modal.Header closeButton>
                    <Modal.Title>About Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Brought to you by React, Webpack & Grails</h4>
                    <div className="center">
                        <span className="about-react-logo">&nbsp;</span>
                        <span className="about-webpack-logo">&nbsp;</span>
                        <span className="about-grails-logo">&nbsp;</span>
                    </div>

                 </Modal.Body>
                <Modal.Footer>
                    <span className="copyright">Built with React 15.3.2, webpack 1.13.1, Grails 3</span><Button onClick={this.toggleModal}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>;
    }
}

export default About;