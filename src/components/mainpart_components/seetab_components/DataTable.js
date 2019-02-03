import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import tabgrid from "../../../utilities/Tabgrid";

export default class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        };
    }

    componentDidMount() {

    }


    afterColumnFilter(column, records) {
        document.getElementById('quantity-of-table').innerText = records.length
    }

    render() {

        const options = {
            afterColumnFilter: (column, records) => this.afterColumnFilter(column, records),
        };

        return (
            <div>
                Quantity: <span id={'quantity-of-table'}>{this.props.data.length}</span>
                <div>
                    <BootstrapTable
                                    data={this.props.data}
                                    pagination
                                    hover
                                    options={options}
                    >
                        <TableHeaderColumn dataField='caseVehicleId' isKey
                                           hidden={true}
                        >id</TableHeaderColumn>
                        <TableHeaderColumn dataField='vehicleBodyType'
                                           filter={{type: 'TextFilter', delay: 500, placeholder: 'Szukaj'}}
                                           thStyle={tabgrid.tg2} tdStyle={tabgrid.tg2}
                        >
                            type
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='vehicleBrand'
                                           filter={{type: 'TextFilter', delay: 500, placeholder: 'Szukaj'}}
                                           thStyle={tabgrid.tg1} tdStyle={tabgrid.tg1}
                        >
                            brand
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='verhicleYear'
                                           filter={{type: 'TextFilter', delay: 500, placeholder: 'Szukaj'}}
                                           thStyle={tabgrid.tg1} tdStyle={tabgrid.tg1}
                        >
                            vehicle year
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='actionPriorToAccident'
                                           filter={{type: 'TextFilter', delay: 500, placeholder: 'Szukaj'}}
                                           thStyle={tabgrid.tg3} tdStyle={tabgrid.tg3}
                        >
                            action prior to accident
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='numberOfOccupants'
                                           filter={{type: 'TextFilter', delay: 500, placeholder: 'Szukaj'}}
                                           thStyle={tabgrid.tg1} tdStyle={tabgrid.tg1}
                        >
                            number of occupants
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='contributingFactor'
                                           filter={{type: 'TextFilter', delay: 500, placeholder: 'Szukaj'}}
                                           thStyle={tabgrid.tg1} tdStyle={tabgrid.tg1}
                        >
                            contributing factor
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='contributingFactorDescription'
                                           filter={{type: 'TextFilter', delay: 500, placeholder: 'Szukaj'}}
                                           thStyle={tabgrid.tg3} tdStyle={tabgrid.tg3}
                        >
                            contributing factor desc
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='otherContrubutingFactor'
                                           filter={{type: 'TextFilter', delay: 500, placeholder: 'Szukaj'}}
                                           thStyle={tabgrid.tg1} tdStyle={tabgrid.tg1}
                        >
                            other contributing factor
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='otherContributingFactorDescription'
                                           filter={{type: 'TextFilter', delay: 500, placeholder: 'Szukaj'}}
                                           thStyle={tabgrid.tg3} tdStyle={tabgrid.tg3}
                        >
                            other contributing factor desc
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='eventType'
                                           filter={{type: 'TextFilter', delay: 500, placeholder: 'Szukaj'}}
                                           thStyle={tabgrid.tg3} tdStyle={tabgrid.tg3}
                        >
                            event type
                        </TableHeaderColumn>
                    </BootstrapTable>

                </div>
            </div>
        );
    }
}

