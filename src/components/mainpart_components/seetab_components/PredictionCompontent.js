import React, {Component} from 'react';
import {Button, Col, Row, Spinner} from "reactstrap";

export default class PredictionCompontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setLoader: false,
            clickProcessData: false,
            processed: []
        };
    }

    componentDidMount() {

    }

    onClickButtonPredict() {

        this.setState({
            setLoader: true,
            clickProcessData: true
        })

        let obj = {}

        if (this.props.data.length === 0) {
            alert('Cannot predict - there is no data')
        } else {



            /*
            * {
            "year": 2015,
            "caseVehicleId": 12466486,
            "vehicleBodyType": "4 DOOR SEDAN",
            "registrationClass": "Not Entered",
            "actionPriorToAccident": "Going Straight Ahead",
            "typeOrAxles": "Not Entered",
            "directionOfTravel": "South",
            "fuelType": "Not Entered",
            "verhicleYear": 2014,
            "stateOfRegistration": "MA",
            "numberOfOccupants": 1,
            "engineCylinders": "-",
            "vehicleBrand": "DODGE",
            "otherContrubutingFactor": "HUMAN",
            "otherContributingFactorDescription": "-",
            "contributingFactor": "HUMAN",
            "contributingFactorDescription": "Alcohol Involvement",
            "eventType": "-",
            "partialVin": "2C3CDXBG7EH315227"
        },
            * */


            for (let i = 0; i < this.props.data.length; i++) {

                let returned = this.setTypeOfVehicle(this.props.data[i])

                if (returned[0] in obj) {
                    if (returned[1] in obj[returned[0]]) {
                        if (returned[2] in obj[returned[0]][returned[1]]) {
                            if (returned[3] in obj[returned[0]][returned[1]][returned[2]]) {
                                if (returned[4] in obj[returned[0]][returned[1]][returned[2]][returned[3]]) {
                                    obj[returned[0]][returned[1]][returned[2]][returned[3]][returned[4]].push(returned[5])
                                }
                                else {
                                    let pomobj = obj[returned[0]][returned[1]][returned[2]][returned[3]]
                                    pomobj = Object.assign(obj[returned[0]][returned[1]][returned[2]][returned[3]], {
                                        [returned[4]]: [returned[5]]
                                    })
                                    obj[returned[0]][returned[1]][returned[2]][returned[3]] = pomobj
                                }
                            }
                            else {
                                let pomobj = obj[returned[0]][returned[1]][returned[2]]
                                pomobj = Object.assign(obj[returned[0]][returned[1]][returned[2]], {
                                    [returned[3]]:
                                        {
                                            [returned[4]]: [returned[5]]
                                        }
                                })
                                obj[returned[0]][returned[1]][returned[2]] = pomobj
                            }
                        }
                        else {
                            let pomobj = obj[returned[0]][returned[1]]
                            pomobj = Object.assign(obj[returned[0]][returned[1]], {
                                [returned[2]]:
                                    {
                                        [returned[3]]:
                                            {
                                                [returned[4]]: [returned[5]]
                                            }
                                    }
                            })
                            obj[returned[0]][returned[1]] = pomobj
                        }
                    }
                    else {
                        let pomobj = obj[returned[0]]

                        pomobj = Object.assign(obj[returned[0]], {
                            [returned[1]]:
                                {
                                    [returned[2]]:
                                        {
                                            [returned[3]]:
                                                {
                                                    [returned[4]]: [returned[5]]
                                                }
                                        }
                                }
                        })

                        obj[returned[0]] = pomobj
                    }
                }
                else {
                    obj = Object.assign(obj,
                        {
                            [returned[0]]:
                                {
                                    [returned[1]]:
                                        {
                                            [returned[2]]:
                                                {
                                                    [returned[3]]:
                                                        {
                                                            [returned[4]]: [returned[5]]
                                                        }
                                                }
                                        }
                                }
                        }
                    )
                }
            }


            this.setState({
                setLoader: false,
                clickProcessData: true,
                processed: obj
            })

        }
    }


    setTypeOfVehicle(item) {
        let type = null

        if (
            item.vehicleBodyType === '2 DOOR SEDAN' ||
            item.vehicleBodyType === '4 DOOR SEDAN' ||
            item.vehicleBodyType === 'SEDAN' ||
            item.vehicleBodyType === 'UNKNOWN CAR' ||
            item.vehicleBodyType === 'PICKUP TRUCK' ||
            item.vehicleBodyType === 'SUBURBAN'
        ) {
            type = 'CARS'
        } else if (
            item.vehicleBodyType === 'FIRE VEHICLE' ||
            item.vehicleBodyType === 'POLICE VEHICLE'
        ) {
            type = 'LAW_ENFORCEMENT'
        } else if (
            item.vehicleBodyType === 'CEMENT MIXER' ||
            item.vehicleBodyType === 'DLR/TRANSPORTER' ||
            item.vehicleBodyType === 'DUMP' ||
            item.vehicleBodyType === 'ROAD BUILDING MACHINE' ||
            item.vehicleBodyType === 'UTILITY'
        ) {
            type = 'SERVICES'
        } else if (item.vehicleBodyType.indexOf('TRUCK') > 0 && item.vehicleBodyType !== 'PICKUP TRUCK') {
            type = 'TRUCKS'
        } else if (
            item.vehicleBodyType === 'TRACTOR' ||
            item.vehicleBodyType === 'SAND OR AGRICULTURAL' ||
            item.vehicleBodyType === 'TRACTION ENGINE'
        ) {
            type = 'AGRICULTURAL_VEHICLE'
        } else if (
            item.vehicleBodyType === 'CONVERTIBLE' ||
            item.vehicleBodyType === 'OTHER VEHICLE' ||
            item.vehicleBodyType === 'UNKNOWN VEHICLE' ||
            item.vehicleBodyType === 'NotEntered'
        ) {
            type = 'OTHERS'
        }
        else {
            type = item.vehicleBodyType
        }

        if (type) {
            return this.setFactorType(item, type)
        }
    }

    setFactorType(item, type) {
        return this.setMainFactorDescription(item, type, item.contributingFactor)
    }

    setMainFactorDescription(item, type, factor) {
        return this.setOtherFactorDescription(
            item,
            type,
            factor,
            item.contributingFactorDescription
        )
    }

    setOtherFactorDescription(item, type, factor, factorDescription) {
        return this.setActionPrior(
            item,
            type,
            factor,
            factorDescription,
            item.otherContributingFactorDescription
        )
    }

    setActionPrior(item, type, factor, factorDescription, otherFactorDescription) {
        return [
            type,
            factor,
            factorDescription,
            otherFactorDescription,
            item.actionPriorToAccident,
            item
        ]
    }


    render() {


        return (
            <div style={{marginTop: '25px'}}>
                <Row>
                    <Col xs={12}>

                        {
                            (this.state.clickProcessData) ?
                                (this.state.setLoader) ?
                                    <span><Spinner color={'primary'}/> Processing data...</span>
                                    :
                                    'Processing is over'
                                :
                                <div>
                                    <span style={{marginRight: '5px'}}>Click the button to predict most common causes of accidents</span>
                                    <Button onClick={() => this.onClickButtonPredict()} color={'primary'}>Predict</Button>
                                </div>
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

