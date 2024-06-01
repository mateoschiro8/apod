import { useEffect, useState } from "react";
import Footer from "./components/Footer.js"
import Main from "./components/Main.js"
import SideBar from "./components/SideBar.js"
import './App.css';

function App() {
    const [showModal, setShowModal] = useState(false);

    const [data, setData] = useState(null);

    function handleToggleModal() {
        setShowModal(!showModal);
    }
    
    useEffect(() => {
        async function fetchAPIData() {
            const NASA_KEY = process.env.REACT_APP_NASA_API_KEY;
            const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

            const today = (new Date()).toDateString();
            const localKey = `NASA-${today}`;

            if (localStorage.getItem(localKey)) {
                const apiData = JSON.parse(localStorage.getItem(localKey));
                setData(apiData);
                return
            }

            try {
                const res = await fetch(url);
                const apiData = await res.json();
                localStorage.setItem(localKey, JSON.stringify(apiData)); 
                setData(apiData);
            } catch(error) {
                console.log(error);
            }
        }
        fetchAPIData(); 
    }, []);

    return (
        <>
            {data ? (<Main data={data}/>) : 
            <div className="loadingState">
                <i className="fa-solid fa-gear"></i>
            </div>}
            {showModal && (<SideBar data={data} handleToggleModal={handleToggleModal}/>)}
            {data && (<Footer data={data} handleToggleModal={handleToggleModal}/>)}
        </>
    );
}
 
export default App;
