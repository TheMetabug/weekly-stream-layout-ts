import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./WelcomePage.module.css";

const WelcomePage: React.FC = () => {
    return (
        <Fragment>
            <div className="debug-div">
                <div>
                    <Link className="debug-button" to="/edit/null">Edit</Link>
                    <Link className="debug-button" to="/overlay/null">Overlay</Link>
                </div>      
            </div>
            <div className="centered">
       
            </div>
        </Fragment>
    );
}

export default WelcomePage;