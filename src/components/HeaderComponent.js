import React, {Component} from 'react';
import {Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    componentDidMount() {
    }


    render() {

        return (
            <div>
                <div id={'HEADER_COMPONENT'}>
                    <div id={'header_bar'}>
                        <h4 onClick={() => {
                            this.setState({modalVisible: !this.state.modalVisible})
                        }}>
                            <i className={'fa fa-user-circle-o'}></i> About author
                        </h4>
                        <div className={'clear'}></div>
                    </div>
                    <div id={'header_main_component'}>
                        <div id={'inner-header-main-component-icon'}>
                            <i className={'fa fa-object-group'}></i>
                        </div>
                        <div id={'inner-header-main-component'}>
                            <div>
                                <h1>
                                    Prediction of common causes of road accidents
                                </h1>
                            </div>
                            <div>
                                <h2>
                                    A project aimed at using machine learning to predict the most common causes of road accidents
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.modalVisible} toggle={()=>{this.setState({modalVisible: !this.state.modalVisible})}} className={this.props.className}>
                    <ModalHeader toggle={()=>{this.setState({modalVisible: !this.state.modalVisible})}}>About author</ModalHeader>
                    <ModalBody>
                        <div id={'about-author-modal'}>
                            <Row>
                                <Col xs={12}>
                                    <div>
                                        <label><i className={'fa fa-user-circle-o'}></i> Author:</label> <span>Iwona Lalak</span>
                                    </div>
                                    <div>
                                        <label><i className={'fa fa-map-marker'}></i> Place:</label> <span>Rzeszów, Poland</span>
                                    </div>
                                    <div>
                                        <label><i className={'fa fa-envelope'}></i> Email:</label> <span>lalak.iwona@gmail.com</span>
                                    </div>
                                    <div>
                                        <label><i className={'fa fa-linkedin-square'}></i> LinkedIn:</label> <a href={'https://www.linkedin.com/in/iwona-lalak-461b52142/'} target={'_blank'}>/IwonaLalak</a>
                                    </div>
                                    <div>
                                        <label><i className={'fa fa-github'}></i> GitHub:</label> <a href={'https://github.com/IwonaLalak'} target={'_blank'}>/IwonaLalak</a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={()=>{this.setState({modalVisible: !this.state.modalVisible})}}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

