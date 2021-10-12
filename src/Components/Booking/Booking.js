import React from 'react'

 import Freight from '../../Icons/Freight'
 import Officer from '../../Icons/Officer'
import "./Booking.css"
 import Truck from '../../Icons/Truck'
 import { Container } from '@material-ui/core'
import Import from '../Import/Import'
import CargoDetails from '../CargoDetails/CargoDetails'
import Footer from '../../Components/Footer/AdditionalService'
import AdditionalService from '../../Components/Footer/AdditionalService'
const Booking = () => {
    return (
        <div className="display">
            <div className="container">
                <div className="booking-container">
                    <div>
                        <i class="fas fa-arrow-left"></i>
                    </div>
                    <Container>
                    <div className="container-two">
                        <div className="booking">
                            <h3>New Booking</h3>
                            <p className="title">Fill in the information below to get a quote or create a new booking</p>
                        </div>
                        <div className="service">
                            <h4>Select a service</h4>
                            <div className="cards-container">
                                <div className="first-card ">
                                    <p className="air-freight">Air Freight</p>
                                    <div className="freight-icon-container">
                                
                                    </div>
                                </div>
                                <div className="same-cards">
                                    <p className="sea-freight">Sea Freight</p>
                                    <div className="sea-freight-icon-container">
                                      {<Freight/>}
                                    </div>
                                </div>
                                <div className="same-cards">
                                    <p className="inland-truck"> Inland<br></br> (Truck & Barge)</p>
                                    <div className="truck-freight-icon-container">
                                        {/* { <Truck/>} */}
                                    </div>
                                </div>
                                <div className="same-cards">
                                    <p className="customs-clearance">Customs<br/> Clearance</p>
                                    <div className="officee-box-container">
                                        {<Officer/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <Import/>
                        <CargoDetails />
                        <AdditionalService/>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Booking