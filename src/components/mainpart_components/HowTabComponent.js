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
                    <Col xs={12}>
                        <div>1) Type of body primary (cars / law enf., services, pedestrian etc)</div>
                        <div>2) If there arent records (like pedestrian, taxi etc) go to point 3. Else remark </div>
                        <div>3) A contributing factor description</div>
                        <div>4) Other contributing factor description</div>
                        <div>5) Event type</div>
                        <div>6) Action prior to accident</div>

                    </Col>
                    <Col xs={12}>
                        <Row>
                            <Col xs={12} lg={4}>

                                <p>
                                    <h5>Vehicle body type</h5>
                                    <ul>
                                        <li>
                                            CARS
                                            <ul>
                                                <li>2 DOOR SEDAN</li>
                                                <li>4 DOOR SEDAN</li>
                                                <li>SEDAN</li>
                                                <li>UNKNOWN CAR</li>
                                                <li>PICKUP TRUCK</li>
                                                <li>SUBURBAN</li>
                                            </ul>
                                        </li>
                                        <li>
                                            LAW ENFORCEMENT
                                            <ul>
                                            <li>FIRE VEHICLE</li>
                                            <li>POLICE VEHICLE</li>
                                            </ul>
                                        </li>
                                        <li>
                                            SERVICES
                                            <ul>
                                                <li>CEMENT MIXER</li>
                                                <li>DLR/TRANSPORTER</li>
                                                <li>DUMP</li>
                                                <li>ROAD BUILDING MACHINE</li>
                                                <li>UTILITY</li>
                                            </ul>
                                        </li>
                                        <li>
                                            TRUCKS
                                            <ul>
                                                <li>DELIVERY TRUCK</li>
                                                <li>FLAT BED TRUCK</li>
                                                <li>STAKE TRUCK</li>
                                                <li>TANK TRUCK</li>
                                                <li>TOW TRUCK</li>
                                                <li>REFRIGERATOR TRUCK</li>
                                                <li>VAN TRUCK</li>
                                                <li>UNKNOWN TRUCK</li>
                                            </ul>
                                        </li>
                                        <li>
                                            AGRICULTURAL VEHICLE
                                            <ul>
                                                <li>SAND OR AGRICULTURAL</li>
                                                <li>TRACTOR</li>
                                                <li>TRACTION ENGINE</li>
                                            </ul>
                                        </li>
                                        <li>
                                            OTHERS
                                            <ul>
                                                <li>CONVERTIBLE</li>
                                                <li>OTHER VEHICLE</li>
                                                <li>UNKNOWN VEHICLE</li>
                                                <li>Not Entered</li>
                                            </ul>
                                        </li>
                                        <li>PEDESTRIAN</li>
                                        <li>BICYCLIST</li>
                                        <li>MOTORCYCLE</li>
                                        <li>BUS (OMNIBUS)</li>
                                        <li>TAXI</li>
                                    </ul>
                                </p>
                            </Col>
                            <Col xs={12} lg={4}>

                                <p>
                                    <h5>Vehicle brand</h5>
                                    <li>
                                        ACURA - Acura
                                    </li>
                                    <li>
                                        AFTM - ?
                                    </li>
                                    <li>
                                        AMERI - American Motors Corporation
                                    </li>
                                    <li>
                                        AUDI - Audi
                                    </li>
                                    <li>
                                        BL/BI - ?
                                    </li>
                                    <li>
                                        BMW - BMW
                                    </li>
                                    <li>
                                        BUICK - Buick
                                    </li>
                                    <li>
                                        BUS - Bus
                                    </li>
                                    <li>
                                        CA/TR - ?
                                    </li>
                                    <li>
                                        CADIL - Cadillac
                                    </li>
                                    <li>
                                        CASE - C.A.S.E
                                    </li>
                                    <li>
                                        CHEVR - Chevrolet
                                    </li>
                                    <li>
                                        CHRYS - Chrysler
                                    </li>
                                    <li>
                                        COOP - ?
                                    </li>
                                    <li>
                                        CR/CA - ?
                                    </li>
                                    <li>
                                        CRANE - ?
                                    </li>
                                    <li>
                                        DAEWO - Daewoo
                                    </li>
                                    <li>
                                        DEER - ??
                                    </li>
                                    <li>
                                        DODGE - Dodge
                                    </li>
                                    <li>
                                        ELDOR - ?
                                    </li>
                                    <li>
                                        FIAT - Fiat
                                    </li>
                                    <li>
                                        FORD - Ford
                                    </li>
                                    <li>
                                        FRE -
                                    </li>
                                    <li>
                                        FREIG -Freightliner
                                    </li>
                                    <li>
                                        FRHT - ?
                                    </li>
                                    <li>
                                        FWD - ?
                                    </li>
                                    <li>
                                        GEO - Geo
                                    </li>
                                    <li>
                                        GILLI -  Gillet
                                    </li>
                                    <li>
                                        GMC - GMC
                                    </li>
                                    <li>
                                        GR/DA - ?
                                    </li>
                                    <li>
                                        HA/DA - Harley Davidson
                                    </li>
                                    <li>
                                        HINO - Hino
                                    </li>
                                    <li>
                                        HONDA - Honda
                                    </li>
                                    <li>
                                        HUMME - Hummer
                                    </li>
                                    <li>
                                        HYLN - ?
                                    </li>
                                    <li>
                                        HYUND - Hyundai
                                    </li>
                                    <li>
                                        IC - IC Bus
                                    </li>
                                    <li>
                                        INFIN - Infiniti
                                    </li>
                                    <li>
                                        INTER - International
                                    </li>
                                    <li>
                                        INTI - ?
                                    </li>
                                    <li>
                                        INTL - ?
                                    </li>
                                    <li>
                                        ISUZU - Isuzu
                                    </li>
                                    <li>
                                        JAGU - Jaguar
                                    </li>
                                    <li>
                                        JEEP - JEEP
                                    </li>
                                    <li>
                                        KIA - KIA
                                    </li>
                                    <li>
                                        KW - Kenworth
                                    </li>
                                    <li>
                                        LA/RO - Land Rover
                                    </li>
                                    <li>
                                        LEXUS - Lexus
                                    </li>
                                    <li>
                                        LINCO - Lincoln Motor Company
                                    </li>
                                    <li>
                                        MACK - Mack Trucks
                                    </li>
                                    <li>
                                        MAZDA - Mazda
                                    </li>
                                    <li>
                                        ME/BE - Mercedes Benz
                                    </li>
                                    <li>
                                        MERCU - Mercury
                                    </li>
                                    <li>
                                        MERZ - Merz
                                    </li>
                                    <li>
                                        MIFU - Mifu
                                    </li>
                                    <li>
                                        MINI - Mini
                                    </li>
                                    <li>
                                        MITSU - Mitsubishi
                                    </li>
                                    <li>
                                        NE/HO - ?
                                    </li>
                                    <li>
                                        NEOPL - ?
                                    </li>
                                    <li>
                                        NISSA - Nissan
                                    </li>
                                    <li>
                                        OLDSM - Olds Mobile
                                    </li>
                                    <li>
                                        OSHK - ?
                                    </li>
                                    <li>
                                        PETER - Peterbilt
                                    </li>
                                    <li>
                                        PIRC - Pirc
                                    </li>
                                    <li>
                                        PLYMO - Plymouth
                                    </li>
                                    <li>
                                        PONTI - Pontiac
                                    </li>
                                    <li>
                                        PORSC - Porsche
                                    </li>
                                    <li>
                                        PREO - ?
                                    </li>
                                    <li>
                                        PTRB - PeterBilt
                                    </li>
                                    <li>
                                        RAM - Ram Truck
                                    </li>
                                    <li>
                                        SAAB - Saab
                                    </li>
                                    <li>
                                        SATUR - Saturn
                                    </li>
                                    <li>
                                        SCIO - Scion
                                    </li>
                                    <li>
                                        SMART - Smart
                                    </li>
                                    <li>
                                        STERL - ?
                                    </li>
                                    <li>
                                        SUBAR - Subaru
                                    </li>
                                    <li>
                                        SUZI - Suzi
                                    </li>
                                    <li>
                                        SUZUK - Suzuki
                                    </li>
                                    <li>
                                        THOMA - Thomas Built Buses
                                    </li>
                                    <li>
                                        TOYOT - toyota
                                    </li>
                                    <li>
                                        UTILI - Utility truck
                                    </li>
                                    <li>
                                        VOLKS - Volkswagen
                                    </li>
                                    <li>
                                        VOLVO - Volvo
                                    </li>
                                    <li>
                                        WESTE - Western Star
                                    </li>
                                    <li>
                                        WHITE - White Motor Company
                                    </li>
                                    <li>
                                        WO/HO - ?
                                    </li>
                                    <li>
                                        - not given
                                    </li>
                                </p>
                            </Col>
                            <Col xs={12} lg={4}>

                                <p>
                                    <h5>
                                        Action prior to accident
                                    </h5>
                                    <ul>
                                        <li>
                                            Avoiding Object in Roadway
                                        </li>
                                        <li>
                                            Backing
                                        </li>
                                        <li>
                                            Changing Lanes
                                        </li>
                                        <li>
                                            Entering Parked Position
                                        </li>
                                        <li>
                                            Going Straight Ahead
                                        </li>
                                        <li>
                                            Making Left Turn
                                        </li>
                                        <li>
                                            Making Right Turn
                                        </li>
                                        <li>
                                            Merging
                                        </li>
                                        <li>
                                            Overtaking/Passing
                                        </li>
                                        <li>
                                            Parked
                                        </li>
                                        <li>
                                            Police Pursuit
                                        </li>
                                        <li>
                                            Slowing or Stopping
                                        </li>
                                        <li>
                                            Starting from Parking
                                        </li>
                                        <li>
                                            Starting in Traffic
                                        </li>
                                        <li>
                                            Stopped in Traffic
                                        </li>
                                        <li>
                                            Unknown
                                        </li>
                                        <li>
                                            Other
                                        </li>
                                        <li>
                                            Not Applicable
                                        </li>
                                    </ul>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} lg={4}>

                                <p>
                                    <h5>A contributing factor description</h5>
                                    <div>
                                        <div><span style={{fontWeight:'bold'}}>V</span> - VEHICLE</div>
                                        <div><span style={{fontWeight:'bold'}}>H</span> - HUMAN</div>
                                        <div><span style={{fontWeight:'bold'}}>E</span> - ENVIRONMENT</div>
                                    </div>
                                    <ul>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Accelerator Defective
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Aggressive Driving/Road Rage
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Alcohol Involvement
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Animal's Action
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Backing Unsafely
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Brakes Defective
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Cell Phone (hand held)
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Driver Inattention/Distraction*
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Driver Inexperience*
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Driverless/Runaway Vehicle
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Drugs (Illegal)
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Eating or Drinking
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Failure to Keep Right
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Failure to Yield Right-of-Way
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Fatigued/Drowsy
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Fell Asleep
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Following Too Closely
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Glare
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Illness
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Lane Marking Improper/Inadequate
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Lost Consciousness
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Obstruction/ Debris
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Other Electronic Device*
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Other Lighting Defects
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Other*
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Outside Car Distraction*
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Oversized Vehicle
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Passenger Distraction
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Passing or Lane Usage Improper
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Passing Too Closely
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Pavement Defective
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Pavement Slippery
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Pedestrian/Bicyclist Error/Confusion
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Physical Disability
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Prescription Medication
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Reaction to Other Uninvolved Vehicle
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Shoulders Defective/Improper
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Steering Failure
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Tire Failure/Inadequate
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Tow Hitch Defective
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Traffic Control Device Disregarded
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Turning Improperly
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Unsafe Lane Changing
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Unsafe Speed
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Using On Board Navigation Device
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> View Obstructed/Limited
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Unknown
                                        </li>
                                    </ul>
                                </p>
                            </Col>
                            <Col xs={12} lg={4}>

                                <p>
                                    <h5>Other contributing factor description</h5>
                                    <div>
                                        <div><span style={{fontWeight:'bold'}}>V</span> - VEHICLE</div>
                                        <div><span style={{fontWeight:'bold'}}>H</span> - HUMAN</div>
                                        <div><span style={{fontWeight:'bold'}}>E</span> - ENVIRONMENT</div>
                                    </div>
                                    <ul>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Accelerator Defective
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Aggressive Driving/Road Rage
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Alcohol Involvement
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Animal's Action
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Backing Unsafely
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Brakes Defective
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Driver Inattention/Distraction*
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Driver Inexperience*
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Drugs (Illegal)
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Failure to Keep Right
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Failure to Yield Right-of-Way
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Fatigued/Drowsy
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Fell Asleep
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Following Too Closely
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Glare
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Illness
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Lane Marking Improper/Inadequate
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Lost Consciousness
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Obstruction/ Debris
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Other Electronic Device*
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Other*
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Outside Car Distraction*
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Passenger Distraction
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Passing or Lane Usage Improper
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Passing Too Closely
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Pavement Defective
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>E</span> Pavement Slippery
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Pedestrian/Bicyclist Error/Confusion
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Physical Disability
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Prescription Medication
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Reaction to Other Uninvolved Vehicle
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Steering Failure
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>V</span> Tire Failure/Inadequate
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Traffic Control Device Disregarded
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Turning Improperly
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Unsafe Lane Changing
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Unsafe Speed
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Using On Board Navigation Device
                                        </li>
                                        <li>
                                            <span style={{fontWeight:'bold'}}>H</span> Unknown
                                        </li>
                                        <li>
                                             not given
                                        </li>
                                    </ul>
                                </p>
                            </Col>
                            <Col xs={12} lg={4}>

                                <p>
                                    <h5>Event type</h5>
                                    <ul>
                                        <li>
                                            Animal, Collision With
                                        </li>
                                        <li>
                                            Barrier, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Bridge Structure, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Building/Wall, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Culver/Head Wall, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Curbing, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Earth Embankment/Rock Cut/Ditch, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Fence, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Fire Hydrant, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Fire/Explosion, Non-Collision
                                        </li>
                                        <li>
                                            Guide Rail - End, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Guide Rail - Not At End, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Light Support/Utility Pole, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Median - Not At End, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Other Fixed Object*, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Other Motor Vehicle, Collision With
                                        </li>
                                        <li>
                                            Other Object (Not Fixed)*, Collision With
                                        </li>
                                        <li>
                                            Other*, Non-Collision
                                        </li>
                                        <li>
                                            Overturned, Non-Collision
                                        </li>
                                        <li>
                                            Pedestrian, Collision With
                                        </li>
                                        <li>
                                            Sign Post, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Snow Embankment, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Submersion, Non-Collision
                                        </li>
                                        <li>
                                            Tree, Collision With Fixed Object
                                        </li>
                                        <li>
                                            Unknown
                                        </li>
                                        <li>
                                            - not given
                                        </li>
                                    </ul>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

