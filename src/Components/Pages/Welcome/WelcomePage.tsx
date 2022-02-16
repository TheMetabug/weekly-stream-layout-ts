import { Fragment } from "react";
import { Link } from "react-router-dom";

const WelcomePage: React.FC = () => {
    return (
        <Fragment>
            <div className="debug-div">
                <div>
                    <Link className="debug-button" to="/edit/editpage">Edit</Link>
                    <Link className="debug-button" to="/overlay/overlaywindow">Overlay</Link>
                </div>      
            </div>
            <div className="centered">
       
            </div>
        </Fragment>
    );
}

export default WelcomePage;