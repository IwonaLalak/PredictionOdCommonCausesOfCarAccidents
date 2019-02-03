import React, {Component} from 'react';
import {Row, Col, Button, Spinner} from "reactstrap";
import DataTable from "./seetab_components/DataTable";
import PredictionCompontent from "./seetab_components/PredictionCompontent";

export default class SeeTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            setLoader: false
        };
    }

    componentDidMount() {

    }


    loadDataIntoState() {
        this.setState({setLoader: true})
        import('../../data/UM_2015_6dot5k.js').then(function (response) {
            this.setState({
                data: response.default.data,
                setLoader: false
            })
        }.bind(this))
    }

    render() {

        return (
            <div className={'tab_container'}>
                <Row>
                    {
                        (!this.state.data.length > 0 && this.state.setLoader === false) ?
                            <Col xs={12}>
                                <span style={{marginRight: '5px'}}>Please load data first</span>
                                <Button color={'primary'} onClick={() => this.loadDataIntoState()}>Load Data</Button>
                            </Col>
                            :
                            ''

                    }
                    <Col xs={12}>
                        {
                            (this.state.data.length === 0) ?
                                (this.state.setLoader) ?
                                    <span><Spinner color={'primary'}/> Loading...</span>
                                    :
                                    ''
                                :
                                <div>
                                    <DataTable data={this.state.data}/>
                                    <PredictionCompontent data={this.state.data}/>
                                </div>
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

