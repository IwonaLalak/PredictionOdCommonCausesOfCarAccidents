import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import AboutTabComponent from "./mainpart_components/AboutTabComponent";
import HowTabComponent from "./mainpart_components/HowTabComponent";
import SeeTabComponent from "./mainpart_components/SeeTabComponent";

export default class MainpartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',    // 1,2,3
        };

    }

    componentDidMount() {
    }

    onChangeActiveTab(tab) {
        this.setState({activeTab: tab})
    }

    renderActiveTab() {
        return(
            <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
                <AboutTabComponent/>
            </TabPane>
            <TabPane tabId="2">
                <HowTabComponent/>
            </TabPane>
            <TabPane tabId="3">
                <SeeTabComponent/>
            </TabPane>
        </TabContent>
        )
    }

    render() {

        return (
            <div id={'MAINPART_COMPONENT'}>
                <div>
                <Row>
                    <Col xs={12}>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={(this.state.activeTab === '1') ? 'active' : ''}
                                    onClick={() => {
                                        this.onChangeActiveTab('1');
                                    }}
                                >
                                    About project
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={(this.state.activeTab === '2') ? 'active' : ''}
                                    onClick={() => {
                                        this.onChangeActiveTab('2');
                                    }}
                                >
                                    How it works?
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={(this.state.activeTab === '3') ? 'active' : ''}
                                    onClick={() => {
                                        this.onChangeActiveTab('3');
                                    }}
                                >
                                    See this
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs={12}>
                        {this.renderActiveTab()}
                    </Col>
                </Row>
                </div>

            </div>
        );
    }
}

