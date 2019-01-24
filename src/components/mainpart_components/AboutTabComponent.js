import React, {Component} from 'react';
import {Row, Col} from "reactstrap";

export default class AboutTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }


    render() {

        return (
            <div className={'tab_container'}>
                <Row>
                    <Col xs={12}>
                        About tab component
                    </Col>
                </Row>
            </div>
        );
    }
}

