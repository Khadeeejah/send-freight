import React from 'react'
import "./Import.css"
import "../Select/Select.css"
import Select from "../../Components/Select/Select"
const selectvalue = {
    defaultSelectText: "Please select an option",
    optionsList: [
        { id: 1, name: "Incoterms" },
        { id: 2, name: "Incoterms" },
        
    ],
}

const Import = () => {
    return (
        <div className="container-two">
            <div className="form-container">
                <i class="fas fa-exclamation-circle"></i>
                <form>
                    <div className="display-flex-form">
                        <div className="button-container">
                            <button>
                                Import
                            </button>
                            <button>
                                Export
                            </button>
                        </div>
                        <div className="input-container-form">
                            <div className="icon-location"><i class="fas fa-map-marker-alt"></i>
                                <p><span>From</span> City or Port</p>
                            </div>
                            <input type="text" className="from-port" />
                        </div>
                        <div className="input-container-form-two">
                            <div className="icon-location"><i class="fas fa-map-marker-alt"></i>
                                <p><span>To</span> City or Port</p>
                            </div>
                            <input type="text" className="from-port" />
                        </div>
                    </div>
                    <div className="form-two-box">
                        <div className="input-placholder-parent">
                            <div className="container-for-icon"><i class="fas fa-calendar-week"></i>
                            <p>Ready Date</p>
                            </div>
                            <input type="text" className="ready-date" />
                            
                        </div>
                        <Select optionsList={ selectvalue.optionsList }/>
                        <div className="input-placholder-parent">
                            <div className="container-for-icon">
                                <p>Total Cargo Value</p>
                            </div>
                            <input type="text" className="ready-date" />

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Import