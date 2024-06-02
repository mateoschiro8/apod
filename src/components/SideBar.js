export default function SideBar(props) {

    const {handleToggleModal, data} = props;

    return (
        <div className="sideBar">
            <div className="sideBarContents">
                <h2> {data?.title} </h2>
                <div className="descriptionContainer">
                    <p> {data?.explanation} </p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>    
                </button>
            </div>
        </div>
    )
}