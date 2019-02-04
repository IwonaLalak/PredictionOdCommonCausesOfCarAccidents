import React, {Component} from 'react';
import {Button, Col, Collapse, Row, Spinner, UncontrolledCollapse} from "reactstrap";
import {Hint, HorizontalGridLines, LabelSeries, VerticalBarSeries as BarSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis/es/index";

export default class PredictionCompontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setLoader: false,
            clickProcessData: false,
            collapseLegend: false,
            processed: [],
            mostCommonOnTreeLvl1: {label: '', value: 0},
            mostCommonOnTreeLvl2: {label: '', value: 0},
            mostCommonOnTreeLvl3: {label: '', value: 0},
            mostCommonOnTreeLvl4: {label: '', value: 0},
            processedChart: [],
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

            this.prepareDataToChartView(this.props.data)


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
                // setLoader: false,
                clickProcessData: true,
                processed: obj
            })


            // for now
            setTimeout(function () {
                this.setState({
                    setLoader: false,
                })
            }.bind(this), 3000)

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


    showTreeStructure(obj) {
        return (<ul style={{border: 'none'}}>
            {
                Object.keys(obj).map((item1, index1) => {
                    return (<li>
                        <a id={"toggler" + item1} style={(this.state.mostCommonOnTreeLvl1.label === item1) ? {fontWeight: 'bold'} : {}}>{item1}</a>
                        <span style={{fontSize: '12px'}}>
                                                                                        <span style={{color: 'grey', marginLeft: '5px'}}>
                                                                                           <i className={'fa fa-list'}></i> Total: {this.countAmountOfAccidentsNodes(obj[item1], 1, item1)}
                                                                                        </span>
                                                                                        <span style={{color: 'firebrick', marginLeft: '5px'}}>
                                                                                            <i className={'fa fa-male'}></i> Victims: {this.countAmountOfVictimsNodes(obj[item1], 1)}
                                                                                        </span>
                                                                                        <span style={{color: '#222', marginLeft: '5px'}}>
                                                                                            <i className={'fa fa-warning'}></i> Victims/Total: {(parseFloat(this.countAmountOfVictimsNodes(obj[item1], 1)) / this.countAmountOfAccidentsNodes(obj[item1], 1)).toFixed(2)}
                                                                                        </span>
                                                                                    </span>

                        <UncontrolledCollapse toggler={"#toggler" + item1}>
                            <ul>
                                {
                                    Object.keys(obj[item1]).map((item2, index2) => {
                                        return (<li>
                                            <a id={"toggler" + item1 + index2}
                                               style={(this.state.mostCommonOnTreeLvl1.label === item1 && this.state.mostCommonOnTreeLvl2.label.indexOf(item2) > 0) ? {fontWeight: 'bold'} : {}}>{item2}</a>
                                            <span style={{fontSize: '12px'}}>
                                                                                        <span style={{color: 'grey', marginLeft: '5px'}}>
                                                                                           <i className={'fa fa-list'}></i> Total: {this.countAmountOfAccidentsNodes(obj[item1][item2], 2, item1 + '/' + item2)}
                                                                                        </span>
                                                                                        <span style={{color: 'firebrick', marginLeft: '5px'}}>
                                                                                            <i className={'fa fa-male'}></i> Victims: {this.countAmountOfVictimsNodes(obj[item1][item2], 2)}
                                                                                        </span>
                                                                                        <span style={{color: '#222', marginLeft: '5px'}}>
                                                                                            <i className={'fa fa-warning'}></i> Victims/Total: {(parseFloat(this.countAmountOfVictimsNodes(obj[item1][item2], 2)) / this.countAmountOfAccidentsNodes(obj[item1][item2], 2)).toFixed(2)}
                                                                                        </span>
                                                                                    </span>
                                            <UncontrolledCollapse toggler={"#toggler" + item1 + index2}>
                                                <ul>
                                                    {
                                                        Object.keys(obj[item1][item2]).map((item3, index3) => {
                                                            return (<li>
                                                                <a id={"toggler" + item1 + index2 + index3}
                                                                   style={(this.state.mostCommonOnTreeLvl3.label === item1 + '/' + item2 + '/' + item3) ? {fontWeight: 'bold'} : {}}>{item3}</a>
                                                                <span style={{fontSize: '12px'}}>
                                                                                        <span style={{color: 'grey', marginLeft: '5px'}}>
                                                                                           <i className={'fa fa-list'}></i> Total: {this.countAmountOfAccidentsNodes(obj[item1][item2][item3], 3, item1 + '/' + item2 + '/' + item3)}
                                                                                        </span>
                                                                                        <span style={{color: 'firebrick', marginLeft: '5px'}}>
                                                                                            <i className={'fa fa-male'}></i> Victims: {this.countAmountOfVictimsNodes(obj[item1][item2][item3], 3)}
                                                                                        </span>
                                                                                        <span style={{color: '#222', marginLeft: '5px'}}>
                                                                                            <i className={'fa fa-warning'}></i> Victims/Total: {(parseFloat(this.countAmountOfVictimsNodes(obj[item1][item2][item3], 3)) / this.countAmountOfAccidentsNodes(obj[item1][item2][item3], 3)).toFixed(2)}
                                                                                        </span>
                                                                                    </span>
                                                                <UncontrolledCollapse toggler={"#toggler" + item1 + index2 + index3}>
                                                                    <ul>
                                                                        {
                                                                            Object.keys(obj[item1][item2][item3]).map((item4, index4) => {
                                                                                return (<li>
                                                                                    <a id={"toggler" + item1 + index2 + index3 + index4}
                                                                                       style={(this.state.mostCommonOnTreeLvl4.label === item1 + '/' + item2 + '/' + item3 + '/' + item4) ? {fontWeight: 'bold'} : {}}>{item4}</a>
                                                                                    <span style={{fontSize: '12px'}}>
                                                                                        <span style={{color: 'grey', marginLeft: '5px'}}>
                                                                                           <i className={'fa fa-list'}></i> Total: {this.countAmountOfAccidentsNodes(obj[item1][item2][item3][item4], 4, item1 + '/' + item2 + '/' + item3 + '/' + item4)}
                                                                                        </span>
                                                                                        <span style={{color: 'firebrick', marginLeft: '5px'}}>
                                                                                            <i className={'fa fa-male'}></i> Victims: {this.countAmountOfVictimsNodes(obj[item1][item2][item3][item4], 4)}
                                                                                        </span>
                                                                                        <span style={{color: '#222', marginLeft: '5px'}}>
                                                                                            <i className={'fa fa-warning'}></i> Victims/Total: {(parseFloat(this.countAmountOfVictimsNodes(obj[item1][item2][item3][item4], 4)) / this.countAmountOfAccidentsNodes(obj[item1][item2][item3][item4], 4)).toFixed(2)}
                                                                                        </span>
                                                                                    </span>

                                                                                    <UncontrolledCollapse
                                                                                        toggler={"#toggler" + item1 + index2 + index3 + index4}>
                                                                                        <ul>
                                                                                            {
                                                                                                Object.keys(obj[item1][item2][item3][item4]).map((item5, index5) => {
                                                                                                    return (<li>
                                                                                                        {item5}
                                                                                                        <span style={{fontSize: '12px'}}>
                                                                                        <span style={{color: 'grey', marginLeft: '5px'}}>
                                                                                           <i className={'fa fa-list'}></i> Total: {(obj[item1][item2][item3][item4][item5]).length}
                                                                                        </span>
                                                                                        <span style={{color: 'firebrick', marginLeft: '5px'}}>
                                                                                            <i className={'fa fa-male'}></i> Victims: {this.countAmountOfLeaf(obj[item1][item2][item3][item4][item5])}
                                                                                        </span>
                                                                                        <span style={{color: '#222', marginLeft: '5px'}}>
                                                                                            <i className={'fa fa-warning'}></i> Victims/Total: {(parseFloat(this.countAmountOfLeaf(obj[item1][item2][item3][item4][item5])) / (obj[item1][item2][item3][item4][item5]).length).toFixed(2)}
                                                                                        </span>
                                                                                        </span>
                                                                                                    </li>)
                                                                                                })
                                                                                            }
                                                                                        </ul>
                                                                                    </UncontrolledCollapse>
                                                                                </li>)
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </UncontrolledCollapse>
                                                            </li>)
                                                        })
                                                    }
                                                </ul>
                                            </UncontrolledCollapse>
                                        </li>)
                                    })
                                }
                            </ul>
                        </UncontrolledCollapse>
                    </li>)
                })
            }
        </ul>)
    }

    countAmountOfLeaf(arr) {
        let amount = 0;

        for (let i in arr) {
            if (arr[i].numberOfOccupants !== '-' && arr[i].numberOfOccupants !== '')
                amount += arr[i].numberOfOccupants
        }

        return amount

    }

    countAmountOfAccidentsNodes(obj, lvl, path) {
        let amount = 0;

        /*
            1 - CARS, TRUCKS ...
                2 - VEHICLE, HUMAN, ENVMT
                    3 - First factor description
                        4 - Second factor description
         */

        if (lvl === 4) {
            for (let key4 in obj) {
                amount += obj[key4].length
            }
            if (this.state.mostCommonOnTreeLvl4.value < amount) {
                if (path !== undefined)
                    this.setState({
                        mostCommonOnTreeLvl4: {label: path, value: amount}
                    })
            }
        }
        else if (lvl === 3) {
            for (let key3 in obj) {
                for (let key4 in obj[key3]) {
                    amount += obj[key3][key4].length
                }
            }
            if (this.state.mostCommonOnTreeLvl3.value < amount) {
                if (path !== undefined)
                    this.setState({
                        mostCommonOnTreeLvl3: {label: path, value: amount}
                    })
            }
        }
        else if (lvl === 2) {
            for (let key2 in obj) {
                for (let key3 in obj[key2]) {
                    for (let key4 in obj[key2][key3]) {
                        amount += obj[key2][key3][key4].length
                    }
                }
            }
            if (this.state.mostCommonOnTreeLvl2.value < amount) {
                if (path !== undefined)
                    this.setState({
                        mostCommonOnTreeLvl2: {label: path, value: amount}
                    })
            }
        }
        else if (lvl === 1) {
            for (let key1 in obj) {
                for (let key2 in obj[key1]) {
                    for (let key3 in obj[key1][key2]) {
                        for (let key4 in obj[key1][key2][key3]) {
                            amount += obj[key1][key2][key3][key4].length
                        }
                    }
                }
            }

            if (this.state.mostCommonOnTreeLvl1.value < amount) {
                if (path !== undefined)
                    this.setState({
                        mostCommonOnTreeLvl1: {label: path, value: amount}
                    })
            }
        }

        return amount

    }

    countAmountOfVictimsNodes(obj, lvl) {
        let amount = 0;

        /*
            1 - CARS, TRUCKS ...
                2 - VEHICLE, HUMAN, ENVMT
                    3 - First factor description
                        4 - Second factor description
         */

        if (lvl === 4) {
            for (let key4 in obj) {
                for (let i = 0; i < obj[key4].length; i++) {
                    if (obj[key4][i].numberOfOccupants !== '-' && obj[key4][i].numberOfOccupants !== '') {
                        amount += obj[key4][i].numberOfOccupants
                    }
                }
            }
        }
        else if (lvl === 3) {
            for (let key3 in obj) {
                for (let key4 in obj[key3]) {
                    for (let i = 0; i < obj[key3][key4].length; i++) {
                        if (obj[key3][key4][i].numberOfOccupants !== '-' && obj[key3][key4][i].numberOfOccupants !== '') {
                            amount += obj[key3][key4][i].numberOfOccupants
                        }
                    }
                }
            }
        }
        else if (lvl === 2) {
            for (let key2 in obj) {
                for (let key3 in obj[key2]) {
                    for (let key4 in obj[key2][key3]) {
                        for (let i = 0; i < obj[key2][key3][key4].length; i++) {
                            if (obj[key2][key3][key4][i].numberOfOccupants !== '-' && obj[key2][key3][key4][i].numberOfOccupants !== '') {
                                amount += obj[key2][key3][key4][i].numberOfOccupants
                            }
                        }
                    }
                }
            }
        }
        else if (lvl === 1) {
            for (let key1 in obj) {
                for (let key2 in obj[key1]) {
                    for (let key3 in obj[key1][key2]) {
                        for (let key4 in obj[key1][key2][key3]) {
                            for (let i = 0; i < obj[key1][key2][key3][key4].length; i++) {
                                if (obj[key1][key2][key3][key4][i].numberOfOccupants !== '-' && obj[key1][key2][key3][key4][i].numberOfOccupants !== '') {
                                    amount += obj[key1][key2][key3][key4][i].numberOfOccupants
                                }
                            }
                        }
                    }
                }
            }
        }

        return amount

    }


    prepareDataToChartView(data) {

        let array = [
            {type: 'V', factor: 'Accelerator Defective', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Aggressive Driving/Road Rage', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Alcohol Involvement', victims: 0, total: 0, ratio: 0},
            {type: 'E', factor: "Animal's Action", victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Backing Unsafely', victims: 0, total: 0, ratio: 0},
            {type: 'V', factor: 'Brakes Defective', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Cell Phone (hand held)', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Driver Inattention/Distraction*', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Driver Inexperience*', victims: 0, total: 0, ratio: 0},
            {type: 'V', factor: 'Driverless/Runaway Vehicle', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Drugs (Illegal)', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Eating or Drinking', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Failure to Keep Right', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Failure to Yield Right-of-Way', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Fatigued/Drowsy', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Fell Asleep', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Following Too Closely', victims: 0, total: 0, ratio: 0},
            {type: 'E', factor: 'Glare', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Illness', victims: 0, total: 0, ratio: 0},
            {type: 'E', factor: 'Lane Marking Improper/Inadequate', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Lost Consciousness', victims: 0, total: 0, ratio: 0},
            {type: 'E', factor: 'Obstruction/ Debris', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Other Electronic Device*', victims: 0, total: 0, ratio: 0},
            {type: 'V', factor: 'Other Lighting Defects', victims: 0, total: 0, ratio: 0},
            {type: 'V', factor: 'Other*', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Outside Car Distraction*', victims: 0, total: 0, ratio: 0},
            {type: 'V', factor: 'Oversized Vehicle', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Passenger Distraction', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Passing or Lane Usage Improper', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Passing Too Closely', victims: 0, total: 0, ratio: 0},
            {type: 'E', factor: 'Pavement Defective', victims: 0, total: 0, ratio: 0},
            {type: 'E', factor: 'Pavement Slippery', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Pedestrian/Bicyclist Error/Confusion', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Physical Disability', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Prescription Medication', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Reaction to Other Uninvolved Vehicle', victims: 0, total: 0, ratio: 0},
            {type: 'E', factor: 'Shoulders Defective/Improper', victims: 0, total: 0, ratio: 0},
            {type: 'V', factor: 'Steering Failure', victims: 0, total: 0, ratio: 0},
            {type: 'V', factor: 'Tire Failure/Inadequate', victims: 0, total: 0, ratio: 0},
            {type: 'V', factor: 'Tow Hitch Defective', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Traffic Control Device Disregarded', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Turning Improperly', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Unsafe Lane Changing', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Unsafe Speed', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Using On Board Navigation Device', victims: 0, total: 0, ratio: 0},
            {type: 'E', factor: 'View Obstructed/Limited', victims: 0, total: 0, ratio: 0},
            {type: 'H', factor: 'Unknown', victims: 0, total: 0, ratio: 0},
        ]


        for (let i = 0; i < data.length; i++) {

            let row = array.find(r => r.factor === data[i].contributingFactorDescription)
            if (row) {
                let previousTotal = row.total
                let previousVictims = row.victims

                row.total = previousTotal + 1
                if (data[i].numberOfOccupants !== '-' && data[i].numberOfOccupants !== '') {
                    row.victims = previousVictims + data[i].numberOfOccupants
                    row.ratio = ((previousVictims + data[i].numberOfOccupants) / (previousTotal + 1)).toFixed(2)
                } else {
                    row.ratio = ((previousVictims) / (previousTotal + 1)).toFixed(2)
                }


            }
        }


        this.setState({
            processedChart: array
        })


        let sortedByTotal = Array.from(array)

        sortedByTotal.sort((a, b) => {
                if (b.total > a.total) return 1
                else return -1
            }
        )
        let sortedByVictims = Array.from(array)

        sortedByVictims.sort((a, b) => {
                if (b.victims > a.victims) return 1
                else return -1
            }
        )
        let sortedByRatio = Array.from(array)

        sortedByRatio.sort((a, b) => {
                if (b.ratio > a.ratio) return 1
                else return -1
            }
        )

        let half = parseInt(array.length / 2)


        this.findDependenciesInData(data, array, sortedByTotal[half].total, sortedByVictims[half].victims, sortedByRatio[half].ratio)


    }

    findDependenciesInData(data, array, averageTotal, averageVictims, averageRatio) {

        // most common fault type, most comon factory vehicle type, most common factory human type, most common environment type
        let dependencies = []


        let arrV = []
        let arrH = []
        let arrE = []

        // select this factors which are more common and more dangerous
        for (let i = 0; i < array.length; i++) {
            if (array[i].total >= averageTotal && array[i].ratio >= averageRatio && array[i].victims >= averageVictims) {
                if (array[i].type === 'V') arrV.push(array[i])
                if (array[i].type === 'H') arrH.push(array[i])
                if (array[i].type === 'E') arrE.push(array[i])
            }
        }

        // most common factor type (human, vehicle or environment fault)

        if (arrV.length > arrE.length && arrV.length > arrH.length) {
            dependencies.push('VEHICLE')
        }
        else if (arrE.length > arrV.length && arrE.length > arrH.length) {
            dependencies.push('ENVIRONMENT')
        }
        else dependencies.push('HUMAN')


        // vehicle

        // most common factor on vehicle type

        let highest = 0
        let dep = ''
        for (let i = 0; i < arrV.length; i++) {
            if (arrV[i].total > highest) {
                highest = arrV[i].total
                dep = arrV[i].factor
            }
        }
        dependencies.push(dep)

        // human

        // most common factor on vehicle type

        highest = 0
        dep = ''
        for (let i = 0; i < arrH.length; i++) {
            if (arrH[i].total > highest) {
                highest = arrH[i].total
                dep = arrH[i].factor
            }
        }
        dependencies.push(dep)

        // environment

        // most common factor on vehicle type

        highest = 0
        dep = ''
        for (let i = 0; i < arrE.length; i++) {
            if (arrE[i].total > highest) {
                highest = arrE[i].total
                dep = arrE[i].factor
            }
        }
        dependencies.push(dep)


        console.log(dependencies)

        this.searchVehicleDependencies(data, array.filter(i => i.type === 'V'))

    }

    searchVehicleDependencies(data, array) {

        // dependence of year and amount

        let years = []
        let brands = []

        for (let i = 0; i < data.length; i++) {
            if (data[i].contributingFactor === "VEHICLE") {
                if (data[i].verhicleYear !== '' && data[i].verhicleYear !== '-') {
                    years.push(data[i].verhicleYear)
                }
                if (data[i].vehicleBrand !== '' && data[i].vehicleBrand !== '-') {
                    brands.push(data[i].vehicleBrand)
                }
            }
        }
        if (years.length > 0) {

            (years.sort((a, b) => {
                    if (b > a) return 1
                    else return -1
                })
            )

        }

        let eariestYear = years[0]
        let oldestYear = years[years.length-1]
        let breakpointsFrequency = Math.ceil((eariestYear - oldestYear)/3)

        let amountOfaccidentsByYears=[]

        for(let freq=0;freq<3;freq++){
            let sum = 0;

            for(let i=0;i<years.length;i++){
                if(
                    ((oldestYear)+(freq*breakpointsFrequency)) <= years[i] &&
                    years[i] < ((oldestYear)+((freq+1)*breakpointsFrequency))
                ){
                    sum = sum+1
                }
            }
            amountOfaccidentsByYears.push({yearFrom:((oldestYear)+(freq*breakpointsFrequency)),yearTo:(((oldestYear)+((freq+1)*breakpointsFrequency))-1),amount:sum})
            sum = 0;
        }

        console.log(amountOfaccidentsByYears)

        // dependence of brand and amount

        let amountOfAccidentsByBrand=[]

        let brandsWithNoRepeats = []

        if(brands.length>0){

            for(let i=0;i<brands.length;i++){
                if(brandsWithNoRepeats.indexOf(brands[i]) < 0){
                    brandsWithNoRepeats.push(brands[i])
                }
            }

            for(let i =0;i<brandsWithNoRepeats.length;i++){
                amountOfAccidentsByBrand.push({brand:brandsWithNoRepeats[i],amount:(brands.filter(e=>e === brandsWithNoRepeats[i])).length})
            }

            (amountOfAccidentsByBrand.sort((a, b) => {
                    if (b.amount > a.amount) return 1
                    else return -1
                })
            )

            console.log(amountOfAccidentsByBrand)
        }



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
                                    <div>
                                        <div>
                                            <h2>Result - Tree view:</h2>
                                            <Button size="sm" color={'secondary'}
                                                    onClick={() => this.setState({collapseLegend: !this.state.collapseLegend})}>{this.state.collapseLegend ? 'Hide legend' : 'Show legend'}</Button>
                                            <Collapse
                                                isOpen={this.state.collapseLegend}
                                            >
                                                <div style={{fontSize: '12px'}}>
                                                    <div>Nesting:</div>
                                                    <div>-- type of vehicle</div>
                                                    <div>----- type of accident factor</div>
                                                    <div>-------- main accident factor description</div>
                                                    <div>----------- other accident factor description</div>
                                                    <div>-------------- action prior to accident</div>
                                                    <div style={{marginTop: '15px', marginBottom: '15px'}}>
                                                        <div>
                                                         <span style={{color: 'grey', marginLeft: '5px'}}>
                                                         <i className={'fa fa-list'}></i> Total - total amount of accidents in particular node or leaf
                                                         </span>
                                                        </div>
                                                        <div>
                                                        <span style={{color: 'firebrick', marginLeft: '5px'}}>
                                                          <i className={'fa fa-male'}></i> Victims - total amount of victims in particular node or leaf
                                                        </span>
                                                        </div>
                                                        <div>
                                                        <span style={{color: '#222', marginLeft: '5px'}}>
                                                        <i className={'fa fa-warning'}></i> Victims/Total - the ratio of the number of victims to the number of accidents in particular node or leaf. The higher the more dangerous
                                                        </span>
                                                        </div>
                                                    </div>

                                                </div>

                                            </Collapse>
                                            <div id={'treeResultView'}>{this.showTreeStructure(this.state.processed)}</div>
                                        </div>
                                        {
                                            (this.state.processedChart.length > 0) ?
                                                <div style={{marginTop: '15px'}}>
                                                    <h2>Result - Chart view:</h2>
                                                    <h4 style={{textAlign: 'center'}}><i className={'fa fa-list'}></i> Most common accidents by factor
                                                    </h4>
                                                    <div style={{overflowX: 'scroll'}}>
                                                        <XYPlot width={1600} height={500} xType="ordinal" getX={d => d.factor} getY={d => d.total}
                                                                margin={{left: 50, top: 10, bottom: 250}}>
                                                            <VerticalGridLines/>
                                                            <HorizontalGridLines/>
                                                            <XAxis tickLabelAngle={-60}/>
                                                            <YAxis title={'Total amount'}/>
                                                            <BarSeries data={this.state.processedChart} color={'#83c33a'}/>
                                                            <LabelSeries data={this.state.processedChart} getLabel={d => d.total}
                                                                         style={{fontSize: '10px'}} rotation={-5}/>
                                                        </XYPlot>
                                                    </div>
                                                    <h4 style={{textAlign: 'center'}}><i className={'fa fa-warning'}></i> Most dangerous accidents by
                                                        factor</h4>
                                                    <div style={{overflowX: 'scroll'}}>
                                                        <XYPlot width={1600} height={500} xType="ordinal" getX={d => d.factor} getY={d => d.ratio}
                                                                margin={{left: 50, top: 10, bottom: 250}}>
                                                            <VerticalGridLines/>
                                                            <HorizontalGridLines/>
                                                            <XAxis tickLabelAngle={-60}/>
                                                            <YAxis title={'Victims  to total ratio'}/>
                                                            <BarSeries data={this.state.processedChart} color={'#83c33a'}/>
                                                            <LabelSeries data={this.state.processedChart} getLabel={d => d.ratio}
                                                                         style={{fontSize: '10px'}} rotation={-5}/>
                                                        </XYPlot>
                                                    </div>
                                                </div>
                                                :
                                                ''
                                        }
                                    </div>
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

