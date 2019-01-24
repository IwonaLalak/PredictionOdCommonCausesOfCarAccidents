import React, {Component} from 'react';
import {Row, Col} from "reactstrap";

export default class SeeTabComponent extends Component {
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
                        See this tab component
                    </Col>
                </Row>
            </div>
        );
    }
}

