export default function Footer(props) {

    const {handleToggleModal, data} = props;

    return (
        <footer>
            <div className="backgroundGradient"> </div>
            <div>
                <h1> Apod project</h1>
                <h2> {data?.title} </h2>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>

        </footer>
    )
}

