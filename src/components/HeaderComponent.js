import React, {Component} from 'react';

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }


    render() {

        return (
            <div id={'HEADER_COMPONENT'}>
                <div id={'header_bar'}>
                    <h4>
                        <i className={'fa fa-user-circle-o'}></i> About author
                    </h4>
                    <div className={'clear'}></div>
                </div>
                <div id={'header_main_component'}>

                </div>
            </div>
        );
    }
}

