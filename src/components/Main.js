export default function Main(props) {
    
    // <img src={data?.hdurl} alt={data.title || "background"} className="backgroundImg"/>
    // <img src="/mars.png" className="backgroundImg"/>

    const {handleToggleModal, data} = props;
    
    return (
        <div className="backgroundImgContainer" onClick={handleToggleModal}> 
            <img src={data?.hdurl} alt={data.title || "background"} className="backgroundImg"/>
        </div>
    );
};