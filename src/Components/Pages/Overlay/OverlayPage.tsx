import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./OverlayPage.module.css";

const OverlayPage: React.FC = () => {

    return (
        <Fragment>
            <div className="debug-div">
                <div>
                    <Link className='debug-button' to="/welcome">Back</Link>
                </div>      
            </div>
            <div className="centered">       
            </div>
        </Fragment>
    );
}

export default OverlayPage;