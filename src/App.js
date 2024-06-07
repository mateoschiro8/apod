import { useEffect, useState } from "react";

import Footer from "./components/Footer.js"
import Main from "./components/Main.js"
import SideBar from "./components/SideBar.js"
import DtPicker from "./components/DtPicker.js";
import InfoProject from "./components/InfoProject.js"

import './App.css';

import dayjs from 'dayjs';

function App() {
    
    const [data, setData] = useState(null);

    const [selectedDate, setSelectedDate] = useState(dayjs());

    const [showModal, setShowModal] = useState(false);
    function handleToggleModal() {
        setShowModal(!showModal);
        setShowCalendar(false);
        setShowInfo(false);
    }
    
    function handleToggleModalForBackground() {
        setShowModal(false);
        setShowCalendar(false);
        setShowInfo(false);
    }

    const [showCalendar, setShowCalendar] = useState(false);
    function handleToggleCalendar() {
        setShowCalendar(!showCalendar);
        setShowModal(false);
        setShowInfo(false);
    }

    const [loading, setLoading] = useState(true);
    function handleLoading () {
        setLoading(false);
    };

    const [showInfo, setShowInfo] = useState(false);
    function handleShowInfo() {
        setShowInfo(!showInfo);
        setShowModal(false);
        setShowCalendar(false);
    }

    useEffect(() => {
        async function fetchAPIData() {
            const NASA_KEY = process.env.REACT_APP_NASA_API_KEY;
     
            const actualDate = `${selectedDate.year()}-${selectedDate.month() + 1}-${selectedDate.date()}`;
            const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${actualDate}`;

            try {
                fetch(url)
                    .then(res => res.json())
                    .then(apiData => setData(apiData))
                setLoading(true);
            } catch(error) {
                console.log(error);
            }
        }
        fetchAPIData(); 
    }, [selectedDate]);

    return (
        <>
            {data ? (<Main data={data} handleToggleModal={handleToggleModalForBackground} handleLoading={handleLoading}/>) : 
                            (<div className="loadingState"> <i className="fa-solid fa-gear"></i> </div>)}
            
            {showModal && (<SideBar data={data} handleToggleModal={handleToggleModal}/>)}

            {loading && (<div className="loadingState"> <i className="fa-solid fa-gear"></i> </div>)}

            {data && (<Footer data={data} 
                handleToggleModal={handleToggleModal}
                handleToggleCalendar={handleToggleCalendar}
                handleShowInfo={handleShowInfo}/>)}

            {showCalendar && <DtPicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>}

            {showInfo && <InfoProject/>}
        </>
    );
}
 
export default App;
