export default function Main(props) {
    
    // <img src={data?.hdurl} alt={data.title || "background"} className="backgroundImg"/>
    // <img src="/mars.png" className="backgroundImg"/>

    const {handleToggleModal, data, handleLoading} = props;

    const isVideo = data.media_type == "video";
    
    if(isVideo)
        handleLoading();

    return (
        <div className="backgroundImgContainer" onClick={handleToggleModal}> 
            {!isVideo && <img src={data?.hdurl} alt={data.title || "background"} className="backgroundImg" onLoad={handleLoading}/>}
            {isVideo && <h1> Este día la NASA subió un video y todavía no sé como mostrarlo <br/> Elegí otro día en el calendario abajo a la derecha <br/> :) </h1>}
        </div>
    );
};