import React, { useState, useRef, useEffect } from "react"

// styles
import "./Select.css";



const Select = ( { optionsList } ) => {
    const [selectedCountryID, setSelectedCountryID] = useState( 1 );
    const [displayList, setDisplayList] = useState( false );
    const wrapperRef = useRef( null );

    useEffect( () => {
        function handleClickOutside( event ) {
            if ( wrapperRef.current && !wrapperRef.current.contains( event.target ) ) {
                setDisplayList( false );
            }
        }
        // Bind the event listener
        document.addEventListener( "mousedown", handleClickOutside );
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener( "mousedown", handleClickOutside );
        };
    }, [wrapperRef] );

    // This method handles the setting of name in select text area
    // and list display on selection
    const handleOptionClick = ( id ) => {
        setSelectedCountryID( id );
        setDisplayList( !displayList );
    }

    const selectedCountry = optionsList.filter( option => option.id === selectedCountryID )[0] || {};
    return (
        <div ref={ wrapperRef } className="custom-select-container">
            <div
                role="button"
                tabIndex={ 0 }
                className={ displayList ? "selected-text-drop active" : "selected-text" }
                onClick={ () => setDisplayList( prevState => !prevState ) }
                // onKeyDown={ handleOptionClick }
            >
                { selectedCountry.name }
            </div>
            { displayList && (
                <ul className="select-options">
                    { optionsList.filter( v => v.id !== selectedCountryID ).map( option => {
                        return (
                            <li
                                className="custom-select-option"
                                data-name={ option.name }
                                key={ option.id }
                                onClick={ () => handleOptionClick( option.id ) }
                            >
                                { option.name }
                            </li>
                        )
                    } ) }
                </ul>
            ) }
        </div>
    )
}

export default Select