import { useEffect, useState } from "react";



export default function Footer(props) {

    const {data, handleToggleModal, handleToggleCalendar} = props;

    const fechaTemp = (data?.date).split(`-`);
    const fechaImagen = [fechaTemp[1], fechaTemp[2], fechaTemp[0]].join(`/`);
    
    return (
        <footer>
            <div className="backgroundGradient"> </div>
            <div>
                <h1> {data? fechaImagen : ""} </h1>
                <h2> {data?.title} </h2>
            </div>
            <div className="buttonsBar">
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-circle-info"></i>
                </button>
                <button onClick={handleToggleCalendar}>
                    <i className="fa-solid fa-calendar-days"></i>
                </button>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-circle-question"></i>
                </button>
            </div>
            
        </footer>
    )
}

