import React from 'react'
import { Toggle } from '../Toggle/Toggle'
import "./CargoDetails.css"
const CargoDetails = () => {
    return (
        <div className="container-two">
            <div className="detail-container">
                <div className="flex-cargo-text">
                    <h3>Cargo Details</h3>
                    <div className="flex-toggle-text">
                        <Toggle/>
                        <p className="cargo-text">
                            <span>Dangerous Cargo</span> (ex. Chemicals, Battery)</p>
                    </div>
                </div>
                <div className="dimension-container">
                    <button className="active-package">
                      Total  Dimensions
                    </button>
                    <button className="non-active-package">
                Package Details
                    </button>
                </div>
                <div className="total-box">
                    <div className="input-total-container">
                        <label>
                            Total Volume
                        </label>
                        <div>
                            <input type="text" className="cargo-input" placeholder="cbm" />
                        </div>
                    </div>
                    <div className="input-total-container">
                        <label>
                            Total Weight
                        </label>
                        <div>
                            <input type="text" className="cargo-input" placeholder="Kg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CargoDetails