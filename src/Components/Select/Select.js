import React, { useState, useRef, useEffect } from "react"


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
        
        document.addEventListener( "mousedown", handleClickOutside );
        return () => {
            
            document.removeEventListener( "mousedown", handleClickOutside );
        };
    }, [wrapperRef] );

    
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