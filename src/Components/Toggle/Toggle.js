import React from 'react'
import "./Toggle.css"
export const Toggle = () => {
    return (
        
            <div class='toggle-switch'>
                <label className="toogle-label">
                    <input className="toogle-input" type='checkbox' />
                    <span class='slider'></span>
                </label>
            </div>

    )
}