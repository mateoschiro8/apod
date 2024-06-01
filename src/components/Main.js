export default function Main(props) {
    
    const {data} = props;
    
    return (
        <div class="backgroundImgContainer"> 
            <img src={data?.hdurl} alt={data.title || "background"} className="backgroundImg"/>
        </div>
    );
};