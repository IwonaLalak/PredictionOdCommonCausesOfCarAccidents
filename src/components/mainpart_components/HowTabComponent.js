import React, {Component} from 'react';
import {Row, Col} from "reactstrap";

export default class HowTabComponent extends Component {
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
                        How it works tab component
                    </Col>
                </Row>
            </div>
        );
    }
}

