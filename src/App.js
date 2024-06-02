import { useEffect, useState } from "react";
import Footer from "./components/Footer.js"
import Main from "./components/Main.js"
import SideBar from "./components/SideBar.js"
import './App.css';
import DtPicker from "./components/DtPicker.js";
import dayjs from 'dayjs';

function App() {
    const [showModal, setShowModal] = useState(false);

    const [loading, setLoading] = useState(true);
    console.log(loading);

    const [data, setData] = useState(null);

    const [selectedDate, setSelectedDate] = useState(dayjs());

    function handleToggleModal() {
        setShowModal(!showModal);
    }
    
    function handleToggleModalForBackground() {
        setShowModal(false);
        setShowCalendar(false);
    }

    
    const [showCalendar, setShowCalendar] = useState(false);
    function handleToggleCalendar() {
        setShowCalendar(!showCalendar);
    }

    function handleLoading () {
        setLoading(false);
        console.log(loading); 
    };

    useEffect(() => {
        async function fetchAPIData() {
            const NASA_KEY = process.env.REACT_APP_NASA_API_KEY;
     
            const actualDate = `${selectedDate.year()}-${selectedDate.month() + 1}-${selectedDate.date()}`;
            const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${actualDate}`;

            try {
                fetch(url)
                    .then(res => res.json())
                    .then(apiData => setData(apiData))
                //const res = await fetch(url);
                //const apiData = await res.json(); 
                //setData(apiData);
                setLoading(true);
            } catch(error) {
                console.log(error);
            }
        }
        fetchAPIData(); 
    }, [selectedDate]);

    return (
        <>
            {(data ) ? (<Main data={data} handleToggleModal={handleToggleModalForBackground} handleLoading={handleLoading}/>) : 
                            (<div className="loadingState">
                                <i className="fa-solid fa-gear"></i>
                            </div>)}
            
            {showModal && (<SideBar data={data} handleToggleModal={handleToggleModal}/>)}

            {loading && (<div className="loadingState">
                                <i className="fa-solid fa-gear"></i>
                            </div>)}

            {data && (<Footer data={data} 
                handleToggleModal={handleToggleModal}
                handleToggleCalendar={handleToggleCalendar}/>)}

            {showCalendar && <DtPicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>}
        </>
    );
}
 
export default App;
