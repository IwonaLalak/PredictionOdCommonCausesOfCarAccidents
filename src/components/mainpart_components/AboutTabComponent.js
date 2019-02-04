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
                    <Col xs={9}>
                        <h5>Welcome to this site</h5>
                        <p>
                            This page represents the project "Prediction of common causes of road accidents". On the individual tabs you will find
                            information about the project, how it works and an example. The page is made using React JS library due to the easy
                            graphical implementation of the received data.
                        </p>
                        <h5>About project</h5>
                        <p>
                            The project is made for scientific purposes in order to pass one of the subjects in the course of studies. It is designed
                            to use machine learning methods to generate results that make it easier to search and find dependencies in large sets of
                            databases. The project concerns the subject of road accidents and its aim is to determine the most common cause of
                            accidents and the most dangerous causes of accidents. Induction teaching is used here, as described in the next section.
                        </p>
                        <h5>Source</h5>
                        <p>
                            The data used in this project has been collected by NYS DMV and can be found at the following URL:
                            <a style={{display:'block'}} href={'https://catalog.data.gov/dataset/motor-vehicle-crashes-vehicle-information-beginning-2009'}>
                                https://catalog.data.gov/dataset/motor-vehicle-crashes-vehicle-information-beginning-2009
                            </a>Around 6,500 records from 2015 were selected from the database.
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}

