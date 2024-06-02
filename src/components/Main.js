export default function Main(props) {
    
    // <img src={data?.hdurl} alt={data.title || "background"} className="backgroundImg"/>
    // <img src="/mars.png" className="backgroundImg"/>

    const {handleToggleModal, data} = props;

    // const isVideo = data.media_type == "video";
    const isVideo = false; 

    return (
        <div className="backgroundImgContainer" onClick={handleToggleModal}> 
            {!isVideo && <img src="/mars.png" className="backgroundImg"/>}
            {isVideo && <h1> La NASA me mandó un video y todavía no sé como mostrarlo :( </h1>}
        </div>
    );
};